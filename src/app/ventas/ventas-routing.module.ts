import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { AperturaComponent } from './caja/apertura/apertura.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
