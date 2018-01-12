import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AdListComponent } from './ad-list.component';

const routes: Routes = [

    {
        path: '', component: AdListComponent,
        children: [
            { path: 'list', component: AdListComponent }
        ]

    }

];

@NgModule({
     imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdListRoutingModule{

}