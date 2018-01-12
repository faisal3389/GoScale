import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SearchAdvanceAdsComponent } from 'app/components/campushaat-ads/search-advance-ads/search-advance-ads.component';
import { SearchAdvancedAdsService } from 'app/services/search-advanced-ads.service';
import { AdResponse } from 'app/models/ad-response.model';
import { Ads } from 'app/models/ad.model';


@Component({
    moduleId: module.id,
    selector: 'app-favouriteads',
    templateUrl: 'favouriteads.component.html',
    styleUrls: ['favouriteads.component.scss']
})
export class FavouriteadsComponent implements OnInit {
    public FavAdsList: Array<Ads>;
    public storedFavAdsIdList: Array<string>;
    public storedFavAdsListJson = {};
    public favAdsForUrlList: String = 'favAds=';
    public lengthOfFavAdIdList: number;
    public throttle: string;
    public scrollDistance: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private searchAdvanceAdsComponent: SearchAdvanceAdsComponent,
        private searchAdvancedAdsService: SearchAdvancedAdsService) {
    }
    ngOnInit() {
        this.route.data
            .subscribe((data: { favouriteAds: AdResponse }) => {
                if (data.favouriteAds) {
                    this.FavAdsList = data.favouriteAds.ads
                }
            })
    }
    adConditionToDisplay(adCondition: any) {

        if (adCondition === 0) {
            return 'Used';
        } else if (adCondition === 1) {
            return 'Used & good';
        } else if (adCondition === 2) {
            return 'New';
        }
    }
    navigateToAdDetailsTab(adId) {
        this.router.navigate([adId + '/addetails'], {
            relativeTo: this.route.parent.parent
        });
    }
    onScrollDown() {

    }
}
