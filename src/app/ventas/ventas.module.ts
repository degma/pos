import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { PanelItemsComponent } from './nueva-venta/panel-items/panel-items.component';
import { PanelCarritoComponent } from './nueva-venta/panel-carrito/panel-carrito.component';
import { PanelTotalComponent } from './nueva-venta/panel-total/panel-total.component';

import { CobroComponent } from './cobro/cobro.component';
import { ItemPropDialogComponent } from './nueva-venta/panel-items/item-prop-dialog/item-prop-dialog.component';

import {
  MatButtonModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './nueva-venta/panel-items/buscador/buscador.component';


@NgModule({
  declarations: [
    VentasComponent,
    NuevaVentaComponent,
    PanelItemsComponent,
    PanelCarritoComponent,
    PanelTotalComponent,
    CobroComponent,
    ItemPropDialogComponent,
    BuscadorComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule
  ],
  entryComponents: [
    CobroComponent,
    ItemPropDialogComponent
  ],
})
export class VentasModule { }
