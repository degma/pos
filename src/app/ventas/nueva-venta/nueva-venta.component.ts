import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent implements OnInit {

  items: any[] = [];
  itemsCarrito: any[] = [];
  subtotalVenta = 0 ;
  descuentosVenta = 0;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getItems().subscribe(resp => {
      this.items = resp;
    });
  }

  onEliminar(articulo: any) {
    this.itemsCarrito.splice(articulo, 1);
  }

  onAgregar(articulo: any) {
    this.itemsCarrito.push(articulo);

  }

}
