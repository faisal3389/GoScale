
import { NgModule } from '@angular/core';
import { SearchAdvancedAdsServiceResolve, AdsResponseServiceResolve, NewHomeAdsResolve, SectionAdsResolve, SectionAdsCategorySelectedResolve } from './search-advanced-ads.resolve';
import { FavouriteAdsResolve } from "app/resolvers/favourite-ads.resolve";
import { ProfileResolve } from "app/resolvers/profile.resolve";
import { UserAdsResolve } from "app/resolvers/user-ads.resolve";
@NgModule({
    imports: [],
    declarations: [],
    providers: [
        SearchAdvancedAdsServiceResolve, AdsResponseServiceResolve, NewHomeAdsResolve, SectionAdsResolve,SectionAdsCategorySelectedResolve,
        FavouriteAdsResolve, ProfileResolve, UserAdsResolve
    ]
})
export class ResolveModule {

}
