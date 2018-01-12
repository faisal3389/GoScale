import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoggedInComponent } from "app/components/user-logged-in/user-logged-in.component";

export const routes: Routes = [

    {
        path: '', component: UserLoggedInComponent,
        children: [
            { path: 'user/loggedin', component: UserLoggedInComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserLoggedInRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
