// Exact copy except import UserService from core
import { Component, OnInit, NgZone, Inject, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Form, FormControl, Validators } from '@angular/forms';
import { FacebookService, InitParams, LoginResponse, LoginOptions, AuthResponse } from 'ngx-facebook';
//import { AuthService, AppGlobals } from 'angular2-google-login';
import { SocialResponse } from '../../models/common.models';
import { User } from '../../models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField } from '@angular/material';
import { GoogleSignInProviderService } from 'ngx-google-sign-in';
import { concat } from 'rxjs/operator/concat';
import { ServerConstants } from "app/constants/server.constants";
@Component({
    styleUrls: ['login.component.scss'],
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit {
    username: string = null;
    password: string = null;
    err: boolean = false;
    socialResponse: SocialResponse;
    user: User;
    public auth2: any;
    variableForExistingUser:string = "login";
    registeredUser:User;

    @ViewChild('googleContainer') googleContainer: any;
    @Input() styles: any;
    @Input() text: string = 'Google';
    @Input() apiKey: string;
    @Output() onSignIn = new EventEmitter<any>();
    @Output() onRefreshToken = new EventEmitter<any>();
    @Output() onSignOut = new EventEmitter<boolean>();
    @Output() onDisconnect = new EventEmitter<boolean>();
    constructor(private loginService: LoginService,/* private auth: AuthService,*/
        private router: Router, private fb: FacebookService, private provider: GoogleSignInProviderService
        , private zone: NgZone, public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.socialResponse = new SocialResponse();
        this.user = new User();
        this.registeredUser = new User();
        const initParams: InitParams = {
            appId: '336247160225608',
            xfbml: true,
            version: 'v2.8',

        };

        fb.init(initParams);
        provider.init('257674144755-qmb21bi7fikke198gi4cdfongmjdvqit.apps.googleusercontent.com')
    }
    public login() {
      //  if(this.variableForExistingUser=="login"){
           this.loginService.login(this.username, this.password)
               .then(res => {
                this.buildUserByServerResponseAndCloseDialog(res.json().user);
                window.location.reload();
            }).catch((err) => {

            });
    //    }
     //   if(this.variableForExistingUser=="register"){
            
       // }
    }
    register(){
         this.loginService.register(this.registeredUser)
            .then(res => {
                console.log("registeruser=", this.registeredUser);
                this.buildUserByServerResponseAndCloseDialog(this.registeredUser);
                window.location.reload();
            }).catch((err) => {

            });  
    }

    forexistinguser() {
        this.variableForExistingUser = "login";
         //console.log("login=", this.variableForExistingUser);
         //(<HTMLInputElement>document.getElementById("fornewuser")).required = false;
        //  (<HTMLInputElement>document.getElementById("firstname")).required = false;
        //  (<HTMLInputElement>document.getElementById("lastname")).required = false;
        //  (<HTMLInputElement>document.getElementById("mobile")).required = false;
        //  (<HTMLInputElement>document.getElementById("email")).required = false;
        //  (<HTMLInputElement>document.getElementById("emailforgot")).required = false;
        //  (<HTMLInputElement>document.getElementById("registerpassword")).required = false;
        //  (<HTMLInputElement>document.getElementById("confirmpassword")).required = false;
        //  (<HTMLInputElement>document.getElementsByName("firstname")).required = false;
        //  (<HTMLInputElement>document.getElementById("lastname")).required = false;
        //  (<HTMLInputElement>document.getElementById("mobile")).required = false;
        //  (<HTMLInputElement>document.getElementById("email")).required = false;
        //  (<HTMLInputElement>document.getElementById("emailforgot")).required = false;
        //  (<HTMLInputElement>document.getElementById("registerpassword")).required = false;
        //  (<HTMLInputElement>document.getElementById("confirmpassword")).required = false;
        document.getElementById('fornewuser').style.display = 'none';
        document.getElementById('forforgot').style.display = 'none';
        document.getElementById('forlogin').style.display = 'block';
    }

    fornewuser() {
        this.variableForExistingUser = "register";
         console.log("register=", this.variableForExistingUser);
        // (<HTMLInputElement>document.getElementById("username")).required = false;
        // (<HTMLInputElement>document.getElementById("password")).required = false;
        // (<HTMLInputElement>document.getElementById("emailforgot")).required = false; 
        document.getElementById('fornewuser').style.display = 'block';
        document.getElementById('forforgot').style.display = 'none';
        document.getElementById('forlogin').style.display = 'none';
    }
    forforgot() {
        //  (<HTMLInputElement>document.getElementById("firstname")).required = false;
        //  (<HTMLInputElement>document.getElementById("lastname")).required = false;
        //  (<HTMLInputElement>document.getElementById("mobile")).required = false;
        //  (<HTMLInputElement>document.getElementById("email")).required = false;
        //  (<HTMLInputElement>document.getElementById("emailforgot")).required = false;
        //  (<HTMLInputElement>document.getElementById("registerpassword")).required = false;
        //  (<HTMLInputElement>document.getElementById("confirmpassword")).required = false;
        document.getElementById('fornewuser').style.display = 'none';
        document.getElementById('forforgot').style.display = 'block';
        document.getElementById('forlogin').style.display = 'none';
    }
    loginWithFacebook(): void {
        const options: LoginOptions = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };
        this.fb.login(options)
            .then((response: LoginResponse) => {
               const authResponse: AuthResponse = this.fb.getAuthResponse();
               this.fb.api('https://graph.facebook.com/v2.9/me?fields=id,name,email,first_name,last_name,picture,link&access_token='
                    + authResponse.accessToken)
                    .then((res) => {
                        this.buildSocialResponseFacebook(res);
                        this.user = this.buildUserByFacebookAuthResponse(this.socialResponse);
                        this.loginService.socialLogin(this.user)
                            .then((res: any) => {
                              this.buildUserByServerResponseAndCloseDialog(res.json().user);
                            }).catch((err) => {

                            });
                    })
                    .catch((error: any) => console.error(error));
            })
            .catch((error: any) => console.error(error));
        //this.fb.ui
    }
    ngOnInit() {
        //  AppGlobals.GOOGLE_CLIENT_ID = '257674144755-qmb21bi7fikke198gi4cdfongmjdvqit.apps.googleusercontent.com';

    }
    buildSocialResponseFacebook(fbResponse: any) {
        this.socialResponse.email = fbResponse.email;
        this.socialResponse.imageURL = fbResponse.picture.data.url;
        this.socialResponse.name = fbResponse.name;
        // this.socialResponse.token=fbResponse.
        this.socialResponse.id = fbResponse.id;
        this.socialResponse.link = fbResponse.link;
        this.socialResponse.first_name = fbResponse.first_name;
        this.socialResponse.last_name = fbResponse.last_name;
        return this.socialResponse;
    }
    googleAuthenticate() {
        /*  this.auth.authenticateUser((result) => {
              if (result === true) {
                  this.getData();
  
                  this.user = this.buildUserByGoogleAuthResponse(this.socialResponse);
  
                  this.loginService.socialLogin(this.user)
                      .then((res) => {
                         this.buildUserByServerResponseAndCloseDialog(res.json().user);
  
                      }).catch((err) => {
  
                      });
              }
          });*/

    }
    buildUserByServerResponseAndCloseDialog(user: User) {
        if (this.user !== null && this.user !== undefined) {
            this.user.userId = user.userId;
            this.user.userType = user.userType;
            this.user.userCampusList = localStorage.getItem('campus');
            /***** set user id in local storage */
            localStorage.setItem('userId', this.user.userId);
            this.dialogRef.close(this.user);
        }
    }
    buildUserByFacebookAuthResponse(socialResponse: SocialResponse) {
        this.user.firstName = socialResponse.first_name;
        this.user.lastName = socialResponse.last_name;
        this.user.userEmail = socialResponse.email;
        this.user.userType = '4';
        this.user.userImage = socialResponse.imageURL;
        return this.user;
    }

    /**
       * Getting data from browser's local storage
       */
    getData() {
        this.socialResponse.token = localStorage.getItem('token');
        this.socialResponse.imageURL = localStorage.getItem('image');
        this.socialResponse.name = localStorage.getItem('name');
        this.socialResponse.email = localStorage.getItem('email');
        // this.socialResponse.u = localStorage.getItem('userId');
    }

    /**
     * Logout user and calls function to clear the localstorage
     */
    logout() {
        let scopeReference = this;
        window.location.reload();
        /*  this.auth.userLogout(function () {
              scopeReference.clearLocalStorage();
          });*/
    }

    /**
     * Clearing Localstorage of browser
     */
    clearLocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
    }
    public signIn() {
        //this.provider.googleAuth()
      
    }

    public refreshToken() {
    }

    public signOut() {
    }

    public disconnect() {

    }
    ngAfterViewInit() {
        this.provider.computeGoogleSignInElement(this.googleContainer.nativeElement)
            .subscribe((data: any) => {
                // var temp = data;
                this.buildUserByGoogleAuthResponse(data);

         });
    }
    buildUserByGoogleAuthResponse(response: any) {
        if (response && response.w3) {
            let userGoogledata = response.w3;
            this.user.firstName = userGoogledata.ig.split(' ')[0];
            this.user.lastName = userGoogledata.ig.split(' ')[1];
            this.user.userEmail = userGoogledata.U3;
            this.user.userType = '4';
            this.user.userImage = userGoogledata.Paa;
            this.saveUserDetailsAndLogin();
            return this.user;
        }
        this.user = null;
        this.saveUserDetailsAndLogin();
        return null;
    }

    saveUserDetailsAndLogin() {
        this.loginService.socialLogin(this.user)
            .then((res) => {
               this.buildUserByServerResponseAndCloseDialog(res.json().user);
            }).catch((err) => {

        });
    }

        emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);

        //matcher = new MyErrorStateMatcher();

}
/*
* @param path {string} The Graph API endpoint path that you want to call.
     * @param [method=get] {string} The HTTP method that you want to use for the API request.
     * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
    
    api(path: string, method?: ApiMethod, params?: any): Promise<any>;
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
