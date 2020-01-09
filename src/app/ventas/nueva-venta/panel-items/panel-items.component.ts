import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import Swal from "sweetalert2";
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: "app-panel-items",
  templateUrl: "./panel-items.component.html",
  styleUrls: ["./panel-items.component.css"]
})
export class PanelItemsComponent implements OnInit {

  constructor() { }

  @Input() articulo: any;
  @Output() agregado = new EventEmitter();

  ngOnInit() { }

  agregar() {
    this.agregado.emit(this.articulo);
  }
}
