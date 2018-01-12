import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAdvancedAdsServiceResolve } from "./resolvers/search-advanced-ads.resolve";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: 'login', loadChildren:'app/components/login/login.module#LoginModule' },
    { path: ':campusName/ads', loadChildren: 'app/components/campushaat-ads/search-advance-ads/search-advance-ads.module#SearchAdvanceAdsModule'},
    { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/components/register/register.module#RegisterModule'},
    { path: 'user/loggedin', loadChildren: 'app/components/user-logged-in/user-logged-in.module#UserLoggedInModule'},
    { path: 'change-password', loadChildren:'app/components/change-password/change-password.module#ChangePasswordModule'},
    { path: 'user/registered', loadChildren: 'app/components/user-registered/user-registered.module#UserRegisteredModule'},
    { path: 'invalid', loadChildren: 'app/components/invalid/invalid.module#InvalidModule'},
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
