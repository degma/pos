import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { PanelItemsComponent } from './nueva-venta/panel-items/panel-items.component';
import { PanelCarritoComponent } from './nueva-venta/panel-carrito/panel-carrito.component';
import { PanelTotalComponent } from './nueva-venta/panel-total/panel-total.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CobroComponent } from './cobro/cobro.component';
import { ItemPropDialogComponent } from './nueva-venta/panel-items/item-prop-dialog/item-prop-dialog.component';

import {
  MatButtonModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './nueva-venta/panel-items/buscador/buscador.component';
import { AperturaComponent } from './caja/apertura/apertura.component';
import { VentasDiaComponent } from './ventas-dia/ventas-dia.component';
import { VentasDiaDetalleComponent } from './ventas-dia/ventas-dia-detalle/ventas-dia-detalle.component';


@NgModule({
  declarations: [
    VentasComponent,
    NuevaVentaComponent,
    PanelItemsComponent,
    PanelCarritoComponent,
    PanelTotalComponent,
    CobroComponent,
    ItemPropDialogComponent,
    BuscadorComponent,
    AperturaComponent,
    VentasDiaComponent,
    VentasDiaDetalleComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule,
    AngularFontAwesomeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule 
  ],
  entryComponents: [
    CobroComponent,
    ItemPropDialogComponent
  ],
})
export class VentasModule { }
