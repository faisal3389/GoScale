import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AdResponse } from '../../../../models/ad-response.model';
import { Ads } from '../../../../models/ad.model';
import { SearchAdvanceAdsComponent } from '../search-advance-ads.component';
import { SearchAdvancedAdsService } from '../../../../services/search-advanced-ads.service';
import { Section } from 'app/models/section-ads.model';
import { Home } from 'app/models/home.model';

@Component({

    selector: 'app-ad-list',
    templateUrl: 'ad-list.component.html',
    styleUrls: ['ad-list.component.scss']
})
export class AdListComponent implements OnInit {

    //adResponse: AdResponse;

    throttle: string;
    scrollDistance: string;
    limit = 20;
    sectionId: number;
    categoryId: string;
    sectionList: Array<Ads>;

    constructor(private route: ActivatedRoute, private router: Router,
        public search: SearchAdvanceAdsComponent, private searchAdvancedAdsService: SearchAdvancedAdsService) {
        //this.start = 20;
        //this.sum = 20;
        this.throttle = '300';
        this.scrollDistance = '0.2';
        //  this.sectionList = this.search.home.adSection[0].sectionAds ;
    }
    addItems(start, sum) {

        return this.searchAdvancedAdsService.sectionAdsCategorySelected(this.search.campusId,this.search.categoryId, this.search.sectionId, start, this.limit)
            .then(response => {
                if (response) {
                    let adResponse: AdResponse = response.json();
                    let length = adResponse.ads.length;

                    for (let i = 0; i < length; i++) {
                        this.search.adResponse.ads.push(adResponse.ads[i]);
                       // this.sectionList.push(adResponse.ads[i]);
                    }
                    if (length < 20) {
                        this.search.scrollFlag = false;
                    }
                }
            }).catch((err) => {

                this.search.scrollFlag = false;
            });
        // for (let i = 0; i < this.sum; ++i) {
        //   //this.array.push([i, ' ', this.generateWord()].join(''));
        // }
    }
    onScrollDown() {
        console.log("sectionlele=", this.sectionId)
        if (this.search.scrollFlag) {
            this.search.sum += 20;

            this.addItems(this.search.start, this.search.sum);
            this.search.start = this.search.sum;
        }
    }

    navigateToAdDetailsTab(adId) {
        this.router.navigate([adId + '/addetails'], {
            relativeTo: this.route.parent.parent
        });
    }
    adConditionToDisplay(adCondition: any) {

        if (adCondition == 0) {
            return 'Used';
        } else if (adCondition == 1) {
            return 'Used & good';
        } else if (adCondition == 2) {
            return 'New';
        }
    }

    ngOnInit() {
        //this.sectionList = this.search.home.adSection[0].sectionAds ;
        this.sectionId = this.search.sectionId;
        this.categoryId = this.search.categoryId;
        this.route.data
            .subscribe((data: { sectionAds: Home }) => {
                if (data.sectionAds) {
                    this.search.adResponse.ads = data.sectionAds.adSection[0].sectionAds;
                } else {
                    this.searchUsingFilter();
                }
            })
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.adResponse = this.search.adResponse;
    }
    searchUsingFilter() {
        this.searchAdvancedAdsService.loadAllAds(this.search.adSearch)
            .then(response => {
                if (response) {
                    this.search.adResponse.ads = response.json().ads;
                    if (this.sectionList.length < 20) {
                        this.search.scrollFlag = false;
                    }
                    //  this.adListComponent.adResponse = this.adResponse;   
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    adRentTypeToDisplay(adRentType: any) {
        if (adRentType === 1) {
            return 'per day';
        } else if (adRentType === 2) {
            return 'per week';
        } else if (adRentType === 3) {
            return 'per month';
        } else if (adRentType === 4) {
            return 'per semester';
        } else if (adRentType === 5) {
            return 'per year';
        } else {
            return 'per day';
        }

    }
}
