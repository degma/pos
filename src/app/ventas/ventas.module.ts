import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { PanelItemsComponent } from './nueva-venta/panel-items/panel-items.component';
import { PanelCarritoComponent } from './nueva-venta/panel-carrito/panel-carrito.component';
import { PanelTotalComponent } from './nueva-venta/panel-total/panel-total.component';


@NgModule({
  declarations: [VentasComponent, NuevaVentaComponent, PanelItemsComponent, PanelCarritoComponent, PanelTotalComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
