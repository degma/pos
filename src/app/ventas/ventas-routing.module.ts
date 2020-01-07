import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';


const routes: Routes = [
  {
    path: '',
    component: VentasComponent
  },
  {
    path: 'nueva',
    component: NuevaVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
