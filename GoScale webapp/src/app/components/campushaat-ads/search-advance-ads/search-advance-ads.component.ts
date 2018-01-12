import { Component, OnInit, Output } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AdResponse } from '../../../models/ad-response.model';
import { Ads } from '../../../models/ad.model';
import { AdSearch } from '../../../models/ad-search.model';
import { SearchAdvancedAdsService } from 'app/services/search-advanced-ads.service';
import { Home } from 'app/models/home.model';
import { Section } from 'app/models/section-ads.model';
import { Categories } from 'app/models/categories.model';


@Component({
    selector: 'app-searchadvanceads',
    templateUrl: 'search-advance-ads.component.html',
    styleUrls: ['search-advance-ads.component.scss']

})
export class SearchAdvanceAdsComponent {
    public categories: Array<Categories>;
    public adSections: Array<Section>;
    public home: Home;
    public adResponse: AdResponse;
    public campusId: any;
    public limit: any;
    public adSearch: AdSearch;
    public sellPriceMin: number;
    public flag: boolean;
    public searchKey: string;
    public currentDisplayAds: Array<Ads>;
    public isDetailsView: boolean;
    public isListView: boolean;
    public start: any;
    public sum: any;

    public startSearchKey: any;
    public defaultAdCondition: number;
    public usedAdCondition: number;
    public usedAndGoodAdCondition: number;
    public newAdCondition: number;
    public scrollFlag = true;
    public categoryId: string;
    public sectionId: number;
    public favouriteAdIdList: Array<String>;
    public storedFavAdsList: Array<String>;
    public isFilterShow: boolean;

    // advertisements:Array<any>;
    constructor(private route: ActivatedRoute, private router: Router, private searchAdvancedAdsService: SearchAdvancedAdsService,
    ) {
        this.adResponse = new AdResponse();
        this.adSearch = new AdSearch();
        //this.ads = new Ads();
        this.campusId = 1;
        this.start = 20;
        this.limit = 20;
        this.flag = false;
        this.sum = 20;
        //this.searchKey = this.adSearch.searchKey;
        this.currentDisplayAds = new Array<Ads>();
        this.isListView = true;
        this.isDetailsView = false;
        this.startSearchKey = 1;

        this.adSearch.isDonate = 1;
        this.adSearch.sellPriceMin = 0;
        this.adSearch.sellPriceMax = 99999;
        this.adSearch.rentPriceMax = 99999;
        this.adSearch.rentPriceMin = 0;
        this.adSearch.isRent = 1;
        this.adSearch.isSell = 1;
        this.adSearch.adCampus = 1;
        //adSearch.categoryList='';
        //adSearch.adCondition=123;
        //adSearch.rentType=1;
        this.adSearch.start = 0;
        this.adSearch.limit = 100;
        this.adSearch.sortBy = 3;
        this.adSearch.sortOrder = 1;

        this.defaultAdCondition = 123;
        this.usedAdCondition = 1;
        this.usedAndGoodAdCondition = 2;
        this.newAdCondition = 3;
        this.home = new Home();
        this.favouriteAdIdList = new Array<String>();
        //this.sectionId = this.home.adSection[0].sectionId;
        this.isFilterShow = false;
        this.storedFavAdsList = new Array<String>();

    }

    public closeAdDetailsAndRedirect() {
        this.router.navigate(['list'], {
            relativeTo: this.route.parent
        });
    }

    public redirectFavouriteAds() {
        this.router.navigate(['favouriteads'], {
            relativeTo: this.route.parent
        });
    }

    public search() {
        if (this.searchKey !== '') {
            this.searchAdvancedAdsService.loadViaSearchKey(this.adSearch.searchKey, this.campusId, this.startSearchKey, this.limit)
                .then(response => {
                    if (response) {
                        this.adResponse = response.json();
                        //  this.adListComponent.adResponse = this.adResponse;
                        this.router.navigate(['list'], {
                            relativeTo: this.route.parent
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                });
        }
        //    else if(this.key==''){
        //        this.router.navigate(['./'],{
        //            relativeTo:this.route
        //        });
        //    }

    }

    public filter() {
        this.categoryId = '0';
        this.adConditionCheck();
        this.router.navigate(['search'], {
            relativeTo: this.route.parent
        });
    }

    ngOnInit() {
        this.route.children[0].params.subscribe((params) => {
            let categoryId = params['categoryId'];
            this.categoryId = categoryId;
        });

        this.route.data
            .subscribe((data: { home: Home }) => {
                if (data.home) {
                    this.home = data.home;
                    this.adSections = this.home.adSection;
                    this.categories = this.home.categories;
                }
            });

    }

    navigateToAdDetailsTab(adId) {
        this.router.navigate([adId + '/addetails'], {
            relativeTo: this.route.parent
        });
    }

    isDonateCheck(event) {
        var target = event.target || event.srcElement;
        target.checked ? (this.adSearch.isDonate = 1) : (this.adSearch.isDonate = 0);
    }
    isSellCheck(event) {
        var target = event.target || event.srcElement;
        target.checked ? (this.adSearch.isSell = 1) : (this.adSearch.isSell = 0);
        if (this.adSearch.isSell == 0) {
            this.adSearch.sellPriceMin = 0;
            this.adSearch.sellPriceMax = 0;
        }
        else if (this.adSearch.isSell == 1) {
            this.adSearch.sellPriceMin = 0;
            this.adSearch.sellPriceMax = 99999
        }

    }
    isRentCheck(event) {
        var target = event.target || event.srcElement;
        target.checked ? (this.adSearch.isRent = 1) : (this.adSearch.isRent = 0);
        if (this.adSearch.isRent == 0) {
            this.adSearch.rentPriceMin = 0;
            this.adSearch.rentPriceMax = 0;
        }
        else if (this.adSearch.isRent == 1) {
            this.adSearch.rentPriceMin = 0;
            this.adSearch.rentPriceMax = 99999
        }
    }
    adConditionCheck() {
        let t: string = '';
        if (this.defaultAdCondition == 123) {
            t = '123';
        } else {
            if (this.usedAdCondition == 1)
                t = t + '1';
            if (this.usedAndGoodAdCondition == 2)
                t = t + '2';
            if (this.newAdCondition == 3)
                t = t + '3';
        }
       
        this.adSearch.adCondition = parseInt(t);
       
    }
    selectedCategoryHomeView(categoryId: any) {
        //this.categoryId=categoryId;
        this.searchAdvancedAdsService.categoryAds(this.campusId, categoryId, 0, this.limit)
            .then(response => {
               
                if (response) {
                    if (response.json() && response.json().adSection && response.json().adSection[0].sectionAds.length > 0) {
                        this.home = response.json();
                        this.adSections = this.home.adSection;
                       
                    }

                }
            }).catch((err) => {
                console.log(err);
            });

        this.navigateToSearchAdvancedAds(categoryId);
    }
    navigateToSearchAdvancedAds(categoryId: any) {
        this.categoryId = categoryId;
        this.router.navigate(['home', categoryId], {
            relativeTo: this.route.parent
        });
    }

    //  for(var i = 0;i<=length;i++){
    // }

    // addToFavouriteList(adId: String){
    //     var storedFavAdsList = [];
    //     var t = localStorage.getItem("favouriteAdIdList");
    
    
    //     let storedFavAdsListJson = JSON.parse(localStorage.getItem("favouriteAdIdList"));
    //      for(var j in storedFavAdsListJson){
    //          storedFavAdsList.push(storedFavAdsListJson[j])
    //    }    
    //     if(storedFavAdsList!=null){
    //         let length = storedFavAdsList.length
    //         var index = storedFavAdsList.indexOf(adId);
    //         if(index>-1){
    //             storedFavAdsList.splice(index, 1);
    //             //delete storedFavAdsList[index]
    //         }
    //         else{
    //             storedFavAdsList.push(adId);
    //         }
    //         localStorage.setItem("favouriteAdIdList", JSON.stringify(storedFavAdsList));
    //         //  for(var i = 0;i<=length;i++){
    //         // }
    //     }
    // }

    addToFavouriteList(adId: String) {
        if (localStorage.getItem("favouriteAdIdList") != null) {
            this.storedFavAdsList = JSON.parse(localStorage.getItem("favouriteAdIdList"));
            var index = this.storedFavAdsList.indexOf(adId);
            if (index > -1) {
                this.storedFavAdsList.splice(index, 1);
            }
            else {
                this.storedFavAdsList.push(adId);
            }
        }
        else {
            this.storedFavAdsList.push(adId);
        }
        localStorage.setItem("favouriteAdIdList", JSON.stringify(this.storedFavAdsList));
    }

    showMobileCategoryFilter() {
        this.isFilterShow = !this.isFilterShow;

    }

    addItems(start, sum) {
        
                return this.searchAdvancedAdsService.homeAds(this.campusId, start, this.limit)
                    .then(response => {
                        if (response) {
                            let adResponse: AdResponse = response.json();
                            let length = adResponse.ads.length;
        
                            for (let i = 0; i < length; i++) {
                                this.adResponse.ads.push(adResponse.ads[i]);
                               // this.sectionList.push(adResponse.ads[i]);
                            }
                            if (length < 20) {
                                this.scrollFlag = false;
                            }
                        }
                    }).catch((err) => {
        
                        this.scrollFlag = false;
                    });
                // for (let i = 0; i < this.sum; ++i) {
                //   //this.array.push([i, ' ', this.generateWord()].join(''));
                // }
            }
            onScrollDown() {
                if (this.scrollFlag) {
                    this.sum += 20;
        
                    this.addItems(this.start, this.sum);
                    this.start = this.sum;
                }
}
}
