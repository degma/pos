import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-carrito',
  templateUrl: './panel-carrito.component.html',
  styleUrls: ['./panel-carrito.component.css']
})
export class PanelCarritoComponent implements OnInit {

  @Input() carrito: any[] = [];
  @Output() borrado = new EventEmitter();

  constructor() { }

  ngOnInit() {

}

eliminar(i: any) {

  Swal.fire({
    title: '¿Eliminar Artículo?',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true
  }).then(resp => {
    if (resp.value) {
      this.borrado.emit(i);
    }
  });

}
}
