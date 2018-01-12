import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdResponse } from '../models/ad-response.model';
import { AdSearch } from '../models/ad-search.model';
import { Home } from 'app/models/home.model';
import { Ads } from 'app/models/ad.model';
import { FavouriteAdsService } from 'app/services/favourite-ads.service';

@Injectable()
export class FavouriteAdsResolve implements Resolve<AdResponse>{
    storedFavAdsIdList: Array<string>;
    favAdsForUrlList: String = 'favAds=';
    lengthOfFavAdIdList: number;
    start: number = 0;
    limit: number = 20;

    constructor(private favouriteAdsService: FavouriteAdsService, private router: Router) {
        this.storedFavAdsIdList = new Array<string>();
    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {

        this.storedFavAdsIdList = JSON.parse(localStorage.getItem('favouriteAdIdList'))

        if (this.storedFavAdsIdList != null) {
            this.favAdsForUrlList = 'favAds=';
            this.lengthOfFavAdIdList = this.storedFavAdsIdList.length;
            for (var i = 0; i < this.lengthOfFavAdIdList; i++) {
                if (this.storedFavAdsIdList.indexOf(this.storedFavAdsIdList[i]) >= 0) {
                    this.favAdsForUrlList = this.favAdsForUrlList.concat(this.storedFavAdsIdList[i] + ';')
                         }
                     }
        } else {
            console.log('Not added to favourites yet');
        }
        return this.favouriteAdsService.loadFavouriteAds(this.favAdsForUrlList, this.start, this.limit).then(response => {
            if (response) { try { return response.json(); } catch (e) { return false; } 
        }else { return false; }
        });
    }
}
