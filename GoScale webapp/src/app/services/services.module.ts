
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { RestClient } from './rest-client.service';

import { FacebookService } from 'ngx-facebook';
//import { AuthService } from 'angular2-google-login';
import { ProfileService } from './profile.service';
@NgModule({
    imports: [],
    declarations: [

    ],
    providers: [
        LoginService, RestClient, 
         FacebookService
        //, AuthService
        , ProfileService
    ]
})
export class ServicesModule {

}
