// Exact copy except import UserService from core
import { Component, OnInit, NgZone, Inject, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Form, FormControl, Validators } from '@angular/forms';
import { FacebookService, InitParams, LoginResponse, LoginOptions, AuthResponse } from 'ngx-facebook';
//import { AuthService, AppGlobals } from 'angular2-google-login';
import { User } from '../../models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField } from '@angular/material';
import { concat } from 'rxjs/operator/concat';
import { ServerConstants } from "app/constants/server.constants";
@Component({
    styleUrls: ['login.component.scss'],
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    username: string = null;
    password: string = null;
    err: boolean = false;
    user: User;
    variableForExistingUser:string = "login";
    registeredUser:User;
    otpmail: string;
    otp: string;
    otpErrorMsg: string;
    requestSubmitted: boolean;
    
    constructor(private loginService: LoginService,
        private router: Router,private route: ActivatedRoute) {
        this.user = new User();
        this.registeredUser = new User();
        this.otpErrorMsg = "Please enter OTP";
        this.requestSubmitted = false;
    }
    ngOnInit() {
    }
    
    public login() {
           this.loginService.login(this.username, this.password)
               .then(res => {
                    if(res.json().baseResponse.statusCode==200){ 
                    console.log(res);
                    this.router.navigate(['user/loggedin'], {
                        relativeTo: this.route.parent.parent
                        });
                    }
                    else{
                        this.router.navigate(['invalid'], {
                            relativeTo: this.route.parent.parent
                        });
                    }
                }).catch((err) => {

                });
    }

    register(){
         this.loginService.register(this.registeredUser)
            .then(res => {
                if(res.json().baseResponse.statusCode==200){
                    this.router.navigate(['user/registered'], {
                    relativeTo: this.route.parent.parent
                    });
                }
                localStorage.setItem('username', this.registeredUser.name);
            }).catch((err) => {

            });  
    }
    save(modal) {
        this.loginService.sendOtpOnMail(this.otpmail)
            .then((res) => {
                    modal.show();
            })
            .catch((err) => {
                console.log("Error while processsing otp request");
            });
    }
    handleSuccess(response) {
        this.requestSubmitted = true;
    }
    verifyOtp(modal) {
        let mailid = this.otpmail;
        console.log("email = ", mailid )
        this.otpErrorMsg = "Verifying...";
        this.loginService.verifyOtp(this.otpmail, this.otp)
            .then((success) => {
                this.router.navigate([mailid+'/change-password'], {
                    relativeTo: this.route.parent.parent
                });
            })
            .catch((err) => {
                this.otpErrorMsg = "Oops! wrong OTP!";
            })
            ;
    }
    handleErr(err) {
        console.log(err);
    }
    cancel() {
        console.log("Cancelled by user");
    }

    forexistinguser() {
        this.variableForExistingUser = "login";
        document.getElementById('forforgot').style.display = 'none';
        document.getElementById('forlogin').style.display = 'block';
    }

    fornewuser() {
        this.variableForExistingUser = "register";
         console.log("register=", this.variableForExistingUser);
        document.getElementById('fornewuser').style.display = 'block';
        document.getElementById('forforgot').style.display = 'none';
        document.getElementById('forlogin').style.display = 'none';
    }
    forforgot() {
        document.getElementById('fornewuser').style.display = 'none';
        document.getElementById('forforgot').style.display = 'block';
        document.getElementById('forlogin').style.display = 'none';
    }
  
    logout() {
        let scopeReference = this;
        window.location.reload();
    }
}

