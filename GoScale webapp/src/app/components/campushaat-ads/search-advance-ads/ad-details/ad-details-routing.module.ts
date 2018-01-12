import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AdDetailsComponent } from './ad-details.component';

const routes: Routes = [

    {
        path: '', component: AdDetailsComponent,
        children: [
            { path: ':adid/addetails', component: AdDetailsComponent }
        ]

    }

];

@NgModule({
     imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdDetailsRoutingModule{

}