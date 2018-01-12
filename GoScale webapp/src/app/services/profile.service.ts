import { Injectable, Inject } from '@angular/core';
import { RestClient } from './rest-client.service';
import { ServerConstants } from '../constants/server.constants';
import { User } from "../models/user.model";
@Injectable()
export class ProfileService {
    constructor(private restClient: RestClient) {

    }

    getUserProfileByUserId(userId : string){
       return this.restClient.get(ServerConstants.USER_PROFILE+userId);
    }

    getUserAdsByUserId(userId: string, start:string, limit:string){
        return this.restClient.get(ServerConstants.USER_AD+"userId="+userId+"&start="+start+"&limit="+limit);
    }
    updateUserProfile(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_PROFILE, userProfile);
    }
    updateUserMobile(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_USER_MOBILE, userProfile);
    }
    updateUserAdress(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_USER_ADDRESS, userProfile);
    }
    updateUserPassword(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_USER_PASSWORD, userProfile);
    }
    updateUserName(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_USER_NAME, userProfile);
    }
    updateUserSex(userProfile:User){
        return this.restClient.post(ServerConstants.UPDATE_USER_SEX, userProfile);
    }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
