import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from 'src/app/interfaces/item.interface';
import { map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  fechaCaja = this.getFechaHoy();

  items$: Observable<any[]>;
  nombreFilter$: BehaviorSubject<string[] | null>;
  fabricanteFilter$: BehaviorSubject<string | null>;
  generoFilter$: BehaviorSubject<string | null>;
  categoriaFilter$: BehaviorSubject<string | null>;

  constructor(private afs: AngularFirestore) {

    this.nombreFilter$ = new BehaviorSubject(null);
    this.categoriaFilter$ = new BehaviorSubject(null);
    this.generoFilter$ = new BehaviorSubject(null);
    this.fabricanteFilter$ = new BehaviorSubject(null);

    this.items$ = combineLatest(
      this.nombreFilter$,
      this.categoriaFilter$,
      this.generoFilter$,
      this.fabricanteFilter$
    ).pipe(
      switchMap(([nombre, categoria, genero, fabricante]) =>
        afs.collection('items', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (nombre) { query = query.where('keywords', 'array-contains', nombre); }
          if (categoria) { query = query.where('categoria', '==', categoria); }
          if (genero) { query = query.where('genero', '==', genero); }
          if (fabricante) { query = query.where('fabricante', '==', fabricante); }
          return query.limit(15);
        }).snapshotChanges().pipe(
          map(a => a.map(i => {
            console.log(i);
            const dat = i.payload.doc.data() as Item;
            const id = i.payload.doc.id;
            return { id, ...dat };
          }))
        )
      )
    );
  }

  filterByFabricante(fabricante: string | null) {
    this.fabricanteFilter$.next(fabricante);
  }
  filterByGenero(genero: string | null) {
    this.generoFilter$.next(genero);
  }
  filterByCategoria(categoria: string | null) {
    this.categoriaFilter$.next(categoria);
  }
  filterByNombre(nombre: string[] | null) {
    this.nombreFilter$.next(nombre);
  }


  createItem(data: Item) {
    return this.afs.collection('items').add(data);
  }

  createVenta(data: any) {



    return this.afs.collection('diario').doc(this.fechaCaja).collection('ventas').add(data).then(resp => {
      this.afs.collection('diario').doc(this.fechaCaja)
        .set({
          cantidadVentas: firebase.firestore.FieldValue.increment(1),
          totalVentas: firebase.firestore.FieldValue.increment(data.montoPago),
          cantidadArticulos: firebase.firestore.FieldValue.increment(data.articulos.length),
        },
          { merge: true });
      data.articulos.map((art) => {
        this.afs.collection('items').doc(art.id).set({ vendidos: firebase.firestore.FieldValue.increment(1) }, { merge: true });
        this.afs.collection('items').doc(art.id)
          .collection('inventario').doc(art.talle + '_' + art.color)
          .set({ talle: art.talle, color: art.color, vendidos: firebase.firestore.FieldValue.increment(1) }, { merge: true });
      });
    });
  }

  filterItemsByFabricante(searchterm: string) {
    return this.afs.collection('items', ref => ref.where('fabricante', '==', searchterm).limit(10)).snapshotChanges().pipe(map(c => {
      return c.map((a: any) => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }


  // CAJA

  checkApertura() {

    return this.afs.collection('diario').doc(this.fechaCaja).valueChanges();
  }

  addApertura(importe: number) {
    const data = {
      fechaCaja: this.fechaCaja,
      importeInicial: importe,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    const apertura = this.afs.collection('diario').doc(this.fechaCaja).set(data);
    return apertura;
  }

  getApertura() {
    return this.afs.collection('diario').doc(this.fechaCaja).valueChanges();
  }

  // Otros

  getFechaHoy() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return yyyy + mm + dd;
  }


  // Valores

  getLOV() {
    return this.afs.collection('config').doc('lov').valueChanges();

  }

}
