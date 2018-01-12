import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SearchAdvanceAdsComponent } from 'app/components/campushaat-ads/search-advance-ads/search-advance-ads.component';
import { Home } from 'app/models/home.model';
import { Categories } from 'app/models/categories.model';
import { Section } from 'app/models/section-ads.model';
import { SearchAdvancedAdsService } from 'app/services/search-advanced-ads.service';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

    public home: Home;
    public adSections: Array<Section>;
    public homeCategories: Array<Categories>;
    public categoryId: string;


    constructor(private route: ActivatedRoute, private router: Router, public saac: SearchAdvanceAdsComponent,
        public searchAdvancedAdsService: SearchAdvancedAdsService) {
        //   this.home = searchAdvanceAdsComponent.home ;
        // this.adSections = searchAdvanceAdsComponent.adSections ;
        //this.homeCategories = searchAdvanceAdsComponent.categories;
    }
    ngOnInit() {
        this.home = this.saac.home;
        this.adSections = this.saac.adSections;
        this.categoryId = this.saac.categoryId;

        // this.homeCategories = this.searchAdvanceAdsComponent.categories;

    }
    ngAfterViewInit() {
        //this.home = this.searchAdvanceAdsComponent.home ;
        //this.adSections = this.searchAdvanceAdsComponent.adSections ;
        //this.homeCategories = this.searchAdvanceAdsComponent.categories;
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

    sectionAdsList(sectionId: any) {
        return this.sectionAdsListView(sectionId, this.categoryId)
    }
    sectionAdsListView(sectionId: any, categoryId: string) {
        let start = 0;
        let limit = 30;
        this.adSections = sectionId;
        console.log("sectionId =", this.adSections)
        if (categoryId && categoryId !== undefined) {
            this.categoryId = categoryId;
            console.log("category =", this.categoryId)
            this.router.navigate([sectionId + '/list/' + categoryId], {
                relativeTo: this.route.parent.parent
            });
        } else {
           
            this.router.navigate([sectionId + '/list'], {
                relativeTo: this.route.parent.parent
            });
        }
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
