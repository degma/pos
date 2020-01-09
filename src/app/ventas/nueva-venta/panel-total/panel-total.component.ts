import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-total',
  templateUrl: './panel-total.component.html',
  styleUrls: ['./panel-total.component.css']
})
export class PanelTotalComponent implements OnInit {

  @Input() subtotalVenta = 0 ;
  @Input() descuentosVenta = 0 ;

  constructor() { }

  ngOnInit() {
  }

}
