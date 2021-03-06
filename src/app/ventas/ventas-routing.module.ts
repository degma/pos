import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { AperturaComponent } from './caja/apertura/apertura.component';
import { VentasDiaComponent } from './ventas-dia/ventas-dia.component';
import { VentasDiaDetalleComponent } from './ventas-dia/ventas-dia-detalle/ventas-dia-detalle.component';


const routes: Routes = [
  {
    path: '',
    component: VentasComponent
  },
  {
    path: 'nueva',
    component: NuevaVentaComponent
  },
  {
    path: 'caja/apertura',
    component: AperturaComponent
  },
  {
    path: ':id',
    component: VentasDiaComponent
  },
  {
    path: ':dia/:idVenta',
    component: VentasDiaDetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
