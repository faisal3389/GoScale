import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CampushaatAdsComponent } from './campushaat-ads.component';
import { SearchAdvancedAdsServiceResolve, NewHomeAdsResolve } from '../../resolvers/search-advanced-ads.resolve';
import { ProfileResolve } from "app/resolvers/profile.resolve";
import { UserAdsResolve } from "app/resolvers/user-ads.resolve";

const routes: Routes = [

    {
        path: '', component: CampushaatAdsComponent,
        children: [

            { path: '', redirectTo: 'searchadvanceads', pathMatch: 'full' },
            {
                path: ':campusName/ads', loadChildren: 'app/components/campushaat-ads/search-advance-ads/search-advance-ads.module#SearchAdvanceAdsModule',
                resolve: {
                    home: NewHomeAdsResolve,
                },
               
            },
             {path: 'profile/name', loadChildren: 'app/components/campushaat-ads/profile/profile.module#ProfileModule',
                resolve: {
                    userResponse : ProfileResolve,
                    userAds: UserAdsResolve ,
                },
             }
        ]

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CampushaatAdsRoutingModule {

}