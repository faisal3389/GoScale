import { Injectable, Inject } from '@angular/core';
import { RestClient } from './rest-client.service';
import { ServerConstants } from '../constants/server.constants';
import { User } from "../models/user.model";
@Injectable()
export class LoginService {
    constructor(private restClient: RestClient) {

    }

    // private buildAuthorization(username: string, password: string) {
    //     return 'Basic ' + btoa(username + ":" + password);
    // }

    // login(username: string, password: string, url:string) {
    //     this.restClient.appendHeaders("Authorization", this.buildAuthorization(username, password));
    //     return null;//his.trestClient.get(ServerConstants.LOGIN_PROVIDER);
    // }
    login(username: string, password: string){
       return this.restClient.get(ServerConstants.LOGIN+"email="+username+"&password="+password)
    }
    socialLogin(user : User){
       return this.restClient.post(ServerConstants.SOCIAL_LOGIN,user);
    }
    register(user : User){
        return this.restClient.post(ServerConstants.REGISTER, user);
    }
    sendOtpOnMail(email: string){
        return this.restClient.get(ServerConstants.REGISTER+"/sendOTPonMail?email="+email);
    }
    verifyOtp(email:string, otp:string){
        return this.restClient.get(ServerConstants.REGISTER+"/verifyOTPonMail?email="+email+"&otp="+otp);
    }
    chnagepassword(email:string, password:string){
        return this.restClient.get(ServerConstants.REGISTER+"/updatePassword?email="+email+"&password="+password);
    }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
