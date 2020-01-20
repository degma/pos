import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemDetalleComponent } from './item/item-detalle/item-detalle.component';
import { ItemListaComponent } from './item/item-lista/item-lista.component';
import { ItemEditarComponent } from './item/item-editar/item-editar.component';
import { InventarioComponent } from './inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminValoresComponent } from './lov/admin-valores/admin-valores.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [ItemDetalleComponent, ItemListaComponent, ItemEditarComponent, InventarioComponent, AdminValoresComponent],
  imports: [
    CommonModule,
    RouterModule,
    InventarioRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ]
})
export class InventarioModule { }
