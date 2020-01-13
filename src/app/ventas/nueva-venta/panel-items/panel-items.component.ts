import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSlideToggle } from '@angular/material';
import { ItemPropDialogComponent } from './item-prop-dialog/item-prop-dialog.component';

@Component({
  selector: 'app-panel-items',
  templateUrl: './panel-items.component.html',
  styleUrls: ['./panel-items.component.css']
})
export class PanelItemsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() articulo: any;
  @Output() agregado = new EventEmitter();

  ngOnInit() { }

  agregar() {
    const itemCarrito = this.articulo;
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ItemPropDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        itemCarrito.talle = data.talle;
        itemCarrito.color = data.color;
        this.agregado.emit(itemCarrito);
      }
    );

  }
}
