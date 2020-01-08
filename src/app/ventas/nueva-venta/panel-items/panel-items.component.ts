import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-panel-items',
  templateUrl: './panel-items.component.html',
  styleUrls: ['./panel-items.component.css']
})
export class PanelItemsComponent implements OnInit {

  @Input() articulo: any;
  @Output() agregado = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  agregar() {
    this.agregado.emit(this.articulo);
  }

}
