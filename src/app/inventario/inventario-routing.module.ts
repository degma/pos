import { MigracionComponent } from './item/migracion/migracion.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ItemEditarComponent } from './item/item-editar/item-editar.component';
import { ItemListaComponent } from './item/item-lista/item-lista.component';
import { AdminValoresComponent } from './lov/admin-valores/admin-valores.component';

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
    },
    {
        path: 'lov/valores',
        component: AdminValoresComponent
    },
    {
        path: 'migracion',
        component: MigracionComponent
    }

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class InventarioRoutingModule { }