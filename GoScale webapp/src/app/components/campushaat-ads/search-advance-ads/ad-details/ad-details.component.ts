import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AdResponse } from '../../../../models/ad-response.model';
import { SearchAdvanceAdsComponent } from '../search-advance-ads.component';
import { Ads } from '../../../../models/ad.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-ad-details',
    templateUrl: 'ad-details.component.html',
    styleUrls: ['ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit, AfterViewInit {
    adResponse: AdResponse;
    currentDisplayAds: Ads;
    isDetailView: boolean;
    adCondition: number;
    array: Array<Ads>;
    daysAgo: number;
    //adListHeight: any;
    mainImageSrcURL : any ;
  
    constructor(private route: ActivatedRoute, private router: Router,
        public saac: SearchAdvanceAdsComponent,
        private _location: Location) {

        this.adResponse = saac.adResponse;
        this.saac.isListView = false;
        this.saac.isDetailsView = true;
        this.isDetailView = saac.isDetailsView;
        this.daysAgo=0;
       // this.adListHeight = ((window.screen.height)*0.7 )+ "px";
        
            
    }
    navigateToAdDetailsTab(adId) {
      
        // this.currentDisplayAds = this.adResponse.ads.filter(adsobj => adsobj.adId ==== adId);
      
        this.saac.isDetailsView = true;
        this.saac.isListView = false;
        this.router.navigate([adId + '/addetails'], {
            relativeTo: this.route.parent.parent
        });
    }
    ngOnInit() {
        this.route.data
            .subscribe((data: { adResponse: AdResponse }) => {
           
                if (data.adResponse) {
                    this.currentDisplayAds = data.adResponse.ads[0];
                    this.daysAgo = Math.ceil((new Date().getTime() - new Date(this.currentDisplayAds.adCreatedDate).getTime())/ (1000 * 3600 * 24));
                    this.mainImageSrcURL = this.currentDisplayAds.adImageUrl[0]; 
                }
            });
        // this.route.params.subscribe((params) => {
        //     let adId = params['adid'];

        //     this.array = this.adResponse.ads.filter(adsobj => adsobj.adId ==== adId);
        //     this.currentDisplayAds = this.array[0];
        // });
    }

    public closeAdDetailsAndRedirect() {
        this.router.navigate(['list'], {
            relativeTo: this.route.parent.parent
        });
    }

    nullCheck(entity) {
        if (entity && entity != null) {
            return entity;
        }
        var a = {};
        a.toString = function () { return '' };
        return a;
    }
    adConditionToDisplay(adCondition: any) {

        if (adCondition === 0) {
            return 'Used';
        } else if (adCondition === 1) {
            return 'Used | good';
        } else if (adCondition === 2) {
            return 'New';
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
    adStatusToDisplay(adStatus) {
        if (adStatus === 0) {
            return 'Sold';
        } if (adStatus === 1) {
            return 'per day';
        } else if (adStatus === 2) {
            return 'per week';
        } else if (adStatus === 3) {
            return 'per month';
        } else if (adStatus === 4) {
            return 'per semester';
        } else if (adStatus === 5) {
            return 'per year';
        } else if (adStatus === 6) {
            return 'per year';
        } else if (adStatus === 7) {
            return 'per year';
        } else if (adStatus === 8) {
            return 'per year';
        } else if (adStatus === 9) {
            return 'per year';
        } else if (adStatus === 10) {
            return 'per year';
        }
    }
    favouriteStorage(adId: string) {
        this.saac.addToFavouriteList(adId)

        document.getElementById('heart').style.color = '#FF7F7F';
    }

    ngAfterViewInit() {
        //alert('workcame');
         this.route.params.subscribe((params) => {
            let adId = params['adid'];
            if(typeof(Storage) !== "undefined") {
                for(var i=1;i<=Number(localStorage.favcount);i++){
                    if(Number(localStorage['id'+i]) == Number(adId)){
                        //alert(localStorage['id'+i]+'del');
                        document.getElementById("heart").style.color = '#FF7F7F';
                    }
                    /*if(Number(localStorage['id'+i]) != Number(adId)){
                        document.getElementById("heart").style.color = '#a8a8a8';
                    }*/
                }
            } else {
                window.alert("Sorry, your browser does not support web storage...");
            }
        });
}
goback() {
    this._location.back();
}

mainImageChange(image : any){
    this.mainImageSrcURL=image;
}
}
