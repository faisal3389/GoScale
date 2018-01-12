import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';
import { AdSearch } from "app/models/ad-search.model";
   
@Injectable()
export class SearchAdvancedAdsService {
    constructor(private restClient: RestClient) {

    }

    loadAllAds(adSearch:AdSearch) {
        return this.restClient.post(ServerConstants.ADVANCED_SEARCH_ADS , adSearch );
    }
	homeAds(campusId,start,limit){
		return this.restClient.get(ServerConstants.HOME_ADS+"campusId="+campusId+"&start="+start+"&limit="+limit);
	}

	loadViaSearchKey(key,campusId,start,limit){
		return this.restClient.get(ServerConstants.SEARCH_ADS+"searchKey="+key+"&campusId="+campusId+"&start="+start+"&limit="+limit);
	}
	 getCurrentDisplayAdsDetailsByAdId(adId: any): any {
       return this.restClient.get(ServerConstants.ADS_DETAILS+adId+"/");
    }
    getDefaultAdSearchObject(){
      let  adSearch= new AdSearch();
		adSearch.searchKey="";
			adSearch.adCampus=1;
			adSearch.categoryList="";
			adSearch.adCondition=123;
			adSearch.sellPriceMin=0;
			adSearch.sellPriceMax=99999;
			adSearch.isDonate=0;
			adSearch.rentPriceMin=0;
			adSearch.rentPriceMax=99999;
			adSearch.rentType=1;
			adSearch.start=0;
			adSearch.limit=20;
			adSearch.sortBy=2;
			adSearch.sortOrder=0 ;
			adSearch.isSell=0;
			 adSearch.isRent=0;
	return  adSearch;    
    }

	newHomeAds(campusId,sectionId,start,limit){
		return this.restClient.get(ServerConstants.NEW_HOME_ADS+"campusId="+campusId+"&sectionId="+sectionId+"&start="+start+"&limit="+limit);
	}

	sectionAdsCategorySelected(campusId,sectionId,categoryId,start,limit){
		return this.restClient.get(ServerConstants.NEW_HOME_ADS+"campusId="+campusId+"&categoryId="+categoryId+"&section="+sectionId+"&start="+start+"&limit="+limit);
	}
	sectionAds(campusId,sectionId,start,limit){
		return this.restClient.get(ServerConstants.NEW_HOME_ADS+"campusId="+campusId+"&sectionId="+sectionId+"&start="+start+"&limit="+limit);

	}
	categoryAds(campusId,categoryId,start,limit){
		return this.restClient.get(ServerConstants.NEW_HOME_ADS+"campusId="+campusId+"&categoryId="+categoryId+"&start="+start+"&limit="+limit);

	}
}