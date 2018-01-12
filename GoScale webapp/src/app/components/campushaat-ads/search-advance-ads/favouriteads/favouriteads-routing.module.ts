import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FavouriteadsComponent } from './favouriteads.component';

const routes: Routes = [

    {
        path: '', component: FavouriteadsComponent,
        children: [
            { path: 'favouriteads', component: FavouriteadsComponent }
        ]

    }

];

@NgModule({
     imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FavouriteadsRoutingModule{

}