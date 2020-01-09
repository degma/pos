import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from 'src/app/interfaces/item.interface';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  createItem(data: Item) {
    return this.firestore.collection('items').add(data);
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges().pipe(map(c => {
      return c.map((a: any) => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

}