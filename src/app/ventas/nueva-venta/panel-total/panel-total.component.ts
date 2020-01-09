import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-total',
  templateUrl: './panel-total.component.html',
  styleUrls: ['./panel-total.component.css']
})
export class PanelTotalComponent implements OnInit {

  @Input() subtotalVenta = 0;
  @Input() descuentosVenta = 0;
  @Output() pago = new EventEmitter();
  @Output() cancelado = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  pagar() {

    this.pago.emit();

  }

  cancelar() {
    this.cancelado.emit();
  }

}
