import { Item } from './../../../interfaces/item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-carrito',
  templateUrl: './panel-carrito.component.html',
  styleUrls: ['./panel-carrito.component.css']
})
export class PanelCarritoComponent implements OnInit {

  @Input() carrito: any[] = [];
  @Output() borrado = new EventEmitter<{articulo: Item, i: number}>();

  constructor() { }

  ngOnInit() {

}

eliminar(precio: number,  i: number) {

  Swal.fire({
    title: '¿Eliminar Artículo?',
    showConfirmButton: true,
    showCancelButton: true
  }).then(resp => {
    if (resp.value) {
      this.borrado.emit({precio, i});
    }
  });

}
}
