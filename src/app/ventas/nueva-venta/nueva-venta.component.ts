import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase/firebase.service";

@Component({
  selector: "app-nueva-venta",
  templateUrl: "./nueva-venta.component.html",
  styleUrls: ["./nueva-venta.component.css"]
})
export class NuevaVentaComponent implements OnInit {
  items: any[] = [];
  itemsCarrito: any[] = [];
  subtotalVenta = 0;
  descuentosVenta = 0;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getItems().subscribe(resp => {
      this.items = resp;
    });
  }

  onEliminar({articulo , i}) {
    this.itemsCarrito.splice( i, 1);
    console.log(typeof this.subtotalVenta);
    console.log(typeof articulo.precio);
    this.subtotalVenta -= parseInt(articulo.precio, 10);
    console.log(this.subtotalVenta);
  }

  onAgregar(articulo: any) {
    this.itemsCarrito.push(articulo);
    this.subtotalVenta += parseInt(articulo.precio, 10);
    console.log(this.subtotalVenta);
  }

  cleanCarrito(){
    this.itemsCarrito = [];
    this.descuentosVenta = 0;
    this.subtotalVenta = 0;

  }

}
