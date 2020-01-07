import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';


@NgModule({
  declarations: [VentasComponent, NuevaVentaComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
