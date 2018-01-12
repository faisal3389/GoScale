

import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { SearchAdvanceAdsComponent } from '../search-advance-ads/search-advance-ads.component';
import { AdsResponseServiceResolve, SectionAdsResolve, SectionAdsCategorySelectedResolve } from "app/resolvers/search-advanced-ads.resolve";
import { FavouriteAdsResolve } from "app/resolvers/favourite-ads.resolve";

const routes: Routes = [
   {
        path: '', component: SearchAdvanceAdsComponent,
        children: [
            //{ path: 'searchadvanceads', component: SearchAdvanceAdsComponent },
             { path: '', redirectTo: 'home/0', pathMatch: 'full' },
             { path: 'home/0', loadChildren: 'app/components/campushaat-ads/search-advance-ads/home/home.module#HomeModule',
                resolve:{
                    
                }
             },
             { path: 'home/:categoryId', loadChildren: 'app/components/campushaat-ads/search-advance-ads/home/home.module#HomeModule',
                resolve:{
                    
                }
            },
            { path: ':sectionId/list', loadChildren: 'app/components/campushaat-ads/search-advance-ads/ad-list/ad-list.module#AdListModule',
                resolve:{
                 sectionAds : SectionAdsResolve ,
                }
          },
           { path: ':sectionId/list/:categoryId', loadChildren: 'app/components/campushaat-ads/search-advance-ads/ad-list/ad-list.module#AdListModule',
                resolve:{
                sectionAds : SectionAdsCategorySelectedResolve ,
                }
          },
          { path: 'list', loadChildren: 'app/components/campushaat-ads/search-advance-ads/ad-list/ad-list.module#AdListModule',
          resolve:{
         
          }
    },
            { path: 'search', loadChildren: 'app/components/campushaat-ads/search-advance-ads/ad-list/ad-list.module#AdListModule',
                resolve:{
                
                }
            },
            { path: ':adid/addetails', loadChildren: 'app/components/campushaat-ads/search-advance-ads/ad-details/ad-details.module#AdDetailsModule',
                resolve:{
                adResponse : AdsResponseServiceResolve,                
              }
          },
          { path: 'favouriteads', loadChildren: 'app/components/campushaat-ads/search-advance-ads/favouriteads/favouriteads.module#FavouriteadsModule', 
                resolve:{
                    favouriteAds: FavouriteAdsResolve
                }
            }
        ]

    },

];

@NgModule({
     imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SearchAdvanceAdsRoutingModule{

}