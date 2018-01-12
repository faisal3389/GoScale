import { Injectable, Inject } from '@angular/core';
import { ServerConstants } from '../constants/server.constants';
import { RestClient } from './rest-client.service';
import { AdSearch } from "app/models/ad-search.model";
   
@Injectable()
export class FavouriteAdsService {
    constructor(private restClient: RestClient) {

    }

    loadFavouriteAds(userFavs, start, limit) {
        return this.restClient.get(ServerConstants.USER_FAVOURITE_ADS+ userFavs+ "&start="+start+"&limit="+limit);
    }
}