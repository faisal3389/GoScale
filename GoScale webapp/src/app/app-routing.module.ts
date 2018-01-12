import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAdvancedAdsServiceResolve } from "./resolvers/search-advanced-ads.resolve";

export const routes: Routes = [
   // { path: '', redirectTo: 'ads', pathMatch: 'full' },
    { path: '', loadChildren:'app/components/campushaat-ads/campushaat-ads.module#CampushaatAdsModule' },
    { path: ':campusName/ads', loadChildren: 'app/components/campushaat-ads/search-advance-ads/search-advance-ads.module#SearchAdvanceAdsModule'},
    { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
    { path: 'loading', loadChildren: 'app/components/loading/loading.module#LoadingModule' },
    { path: 'logout', loadChildren: 'app/components/logout/logout.module#LogoutModule' },
    { path: 'not-found', loadChildren: 'app/components/notfound/notfound.module#PageNotFoundModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
