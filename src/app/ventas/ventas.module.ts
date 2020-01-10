import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { PanelItemsComponent } from './nueva-venta/panel-items/panel-items.component';
import { PanelCarritoComponent } from './nueva-venta/panel-carrito/panel-carrito.component';
import { PanelTotalComponent } from './nueva-venta/panel-total/panel-total.component';

import { CobroComponent } from './cobro/cobro.component';

import { MatButtonModule, MatDialogModule, MatButtonToggleModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VentasComponent, NuevaVentaComponent, PanelItemsComponent, PanelCarritoComponent, PanelTotalComponent, CobroComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  entryComponents: [
    CobroComponent
  ],
})
export class VentasModule { }
