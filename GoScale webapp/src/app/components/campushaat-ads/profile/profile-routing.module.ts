import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "app/components/campushaat-ads/profile/profile.component";

export const routes: Routes = [

    {
        path: '', component: ProfileComponent,
        children: [
            { path: 'profile/name', component: ProfileComponent },
        ]

    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
