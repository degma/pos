import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { CobroComponent } from '../cobro/cobro.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-venta',
  templateUrl: './nueva-venta.component.html',
  styleUrls: ['./nueva-venta.component.css']
})
export class NuevaVentaComponent implements OnInit {
  items: any[] = [];
  itemsCarrito: any[] = [];
  subtotalVenta = 0;
  descuentosVenta = 0;
  metodoPago = '';

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.firebaseService.getItems().subscribe(resp => {
      this.items = resp;
    });
  }

  onEliminar({ articulo, i }) {
    this.itemsCarrito.splice(i, 1);
    this.subtotalVenta -= +parseInt(articulo.precio, 10);
  }

  onAgregar(articulo: any) {
    this.itemsCarrito.push(articulo);
    this.subtotalVenta += +parseInt(articulo.precio, 10);
  }

  cleanCarrito() {
    Swal.fire({
      title: '¿Cancelar venta actual?',
      showConfirmButton: true,
      showCancelButton: true,
      icon: 'question'
    }).then(resp => {
      if (resp.value) {
        this.itemsCarrito = [];
        this.descuentosVenta = 0;
        this.subtotalVenta = 0;
        this.metodoPago = '';
      }
    })
  }


  cobrarDialog() {
    const dialogRef = this.dialog.open(CobroComponent);

  }

}
