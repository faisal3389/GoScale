
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { RestClient } from './rest-client.service';

import { RegistrationRequestService } from './registration-request.service';
import { AccountRecoveryService } from './account-recovery.service';
import { SearchAdvancedAdsService } from './search-advanced-ads.service';
import { FacebookService } from 'ngx-facebook';
//import { AuthService } from 'angular2-google-login';
import { ProfileService } from './profile.service';
import { FavouriteAdsService } from 'app/services/favourite-ads.service';
@NgModule({
    imports: [],
    declarations: [

    ],
    providers: [
        LoginService, RestClient, SearchAdvancedAdsService, AccountRecoveryService,
        RegistrationRequestService, FacebookService
        //, AuthService
        , ProfileService, FavouriteAdsService
    ]
})
export class ServicesModule {

}
