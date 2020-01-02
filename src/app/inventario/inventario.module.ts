import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemDetalleComponent } from './item/item-detalle/item-detalle.component';
import { ItemListaComponent } from './item/item-lista/item-lista.component';
import { ItemEditarComponent } from './item/item-editar/item-editar.component';
import { InventarioComponent } from './inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';



@NgModule({
  declarations: [ItemDetalleComponent, ItemListaComponent, ItemEditarComponent, InventarioComponent],
  imports: [
    CommonModule,
    RouterModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
