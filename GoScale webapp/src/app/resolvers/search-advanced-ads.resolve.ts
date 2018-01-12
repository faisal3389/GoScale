import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdResponse } from '../models/ad-response.model';
import { SearchAdvancedAdsService } from '../services/search-advanced-ads.service';
import { AdSearch } from '../models/ad-search.model';
import { Home } from "app/models/home.model";
import { Ads } from "app/models/ad.model";

@Injectable()
export class SearchAdvancedAdsServiceResolve implements Resolve<AdResponse>{
    constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {
        let adSearch = this.searchAdvancedAdsService.getDefaultAdSearchObject();
        let limit = 20;
        let start = 0;
        let campusId = 1;
        return this.searchAdvancedAdsService.homeAds(campusId, start, limit).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}


@Injectable()
export class AdsResponseServiceResolve implements Resolve<AdResponse>{
    constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {
        let adId = route.params['adid'];
        return this.searchAdvancedAdsService.getCurrentDisplayAdsDetailsByAdId(adId).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}

@Injectable()
export class NewHomeAdsResolve implements Resolve<Home>{
    constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<Home> {
        let limit = 20;
        let start = 0;
        let campusId = 1;
        // let categoryId = 0;
        let categoryId = route.children[0].children[0].params['categoryId'];
        if (categoryId) {

        } else { categoryId = 0; }
        return this.searchAdvancedAdsService.categoryAds(campusId, categoryId, start, limit).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}

@Injectable()
export class SectionAdsCategorySelectedResolve implements Resolve<AdResponse>{
    constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {
        let sectionId = route.params['sectionId'];
        let categoryId = route.params['categoryId'];
        if (sectionId) { } else { sectionId = 0; }

        let limit = 20;
        let start = 0;
        let campusId = 1;
        return this.searchAdvancedAdsService.sectionAdsCategorySelected(campusId, sectionId, categoryId, start, limit).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}

@Injectable()
export class SectionAdsResolve implements Resolve<AdResponse>{
    constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {
        let sectionId = route.params['sectionId'];
       if (sectionId) { } else { sectionId = 0; }

        let limit = 20;
        let start = 0;
        let campusId = 1;
        return this.searchAdvancedAdsService.sectionAds(campusId, sectionId, start, limit).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}

// @Injectable()
// export class FavouriteAdsResolve implements Resolve<AdResponse>{
//     constructor(private searchAdvancedAdsService: SearchAdvancedAdsService, private router: Router) {

//     }
//     resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {
//         var storedFavAdsList = [];
//          let storedFavAdsListJson = JSON.parse(localStorage.getItem("favouriteAdIdList"))
//             for(var j in storedFavAdsListJson){
//                 storedFavAdsList.push(storedFavAdsListJson[j])
//            }

//            for(var i in storedFavAdsList)

//         return this.searchAdvancedAdsService.getCurrentDisplayAdsDetailsByAdId().then(response => {
//             if (response) {
//                 try { return response.json(); } catch (e) { return false; }
//             } else {
//                 return false;
//             }
//         });
//     }
// }