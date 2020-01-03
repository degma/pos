import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ItemEditarComponent } from './item/item-editar/item-editar.component';

const routes: Routes = [
    {
        path:'',
        component: InventarioComponent        
    },
    {
        path:'nuevo',
        component: ItemEditarComponent
    }
    
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class InventarioRoutingModule {}