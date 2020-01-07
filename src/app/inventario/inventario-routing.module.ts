import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ItemEditarComponent } from './item/item-editar/item-editar.component';
import { ItemListaComponent } from './item/item-lista/item-lista.component';

const routes: Routes = [
    {
        path: '',
        component: InventarioComponent
    },
    {
        path: 'nuevo',
        component: ItemEditarComponent
    },
    {
        path: 'buscar',
        component: ItemListaComponent
    }

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class InventarioRoutingModule { }