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
  @Output() borrado = new EventEmitter<{ articulo: object, i: number }>();
  @Output() devolucion = new EventEmitter<{ articulo: object, i: number}>();

  constructor() { }

  ngOnInit() {

  }
  onToggleDev(articulo: object, i: number) {
    this.devolucion.emit({ articulo, i });
  }

  eliminar(articulo: object, i: number) {

    Swal.fire({
      title: '¿Eliminar Artículo?',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.borrado.emit({ articulo, i });
      }
    });

  }
}
