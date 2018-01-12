import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component'
import { User } from '../../models/user.model';
import { ModalDirective } from 'ngx-bootstrap';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'app-ads',
    templateUrl: 'campushaat-ads.component.html',
    styleUrls: ['campushaat-ads.component.scss']
})

export class CampushaatAdsComponent implements AfterViewInit, OnInit {

    @ViewChild('selectCampusModal') public selectCampusModal: ModalDirective;
    campusName: any;
    public user: User;
    public isLoggedIn: boolean;
    constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog
        , private profileService: ProfileService) {
        this.user = new User();
        this.isLoggedIn = false;
    }

    openDialog() {
        const dialogRef = this.dialog.open(LoginComponent, {
            width: '600px',
            height: '550px',
            data: { user: this.user }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                this.user = result;
                this.isLoggedIn = true;
            }
        });
    }

    ngOnInit() {
        try {
            let localCampusName = localStorage.getItem('campusName');
            if (localCampusName !== '' && localCampusName !== 'undefined' && localCampusName != null) {
                this.campusName = localCampusName;
                this.redirectToHome();
            }
        } catch (e) {
            this.selectCampusModal.config.backdrop = 'static';
            this.selectCampusModal.show();
        }


        let userId = localStorage.getItem('userId');
        if (userId && userId.trim() !== '') {
            this.profileService.getUserProfileByUserId(userId)
                .then((res) => {
                    if (res) {
                        this.user = res.json().user;
                        this.isLoggedIn = true;
                    }
                }).catch((err) => {

                });
        }

    }
    ngAfterViewInit() {

        try {
            let localCampusName = localStorage.getItem('campusName');
            if (localCampusName !== '' && localCampusName !== 'undefined' && localCampusName != null) {
                this.campusName = localCampusName;
                this.redirectToHome();
            } else {
                this.selectCampusModal.config.backdrop = 'static';
                this.selectCampusModal.show();
            }
        } catch (e) {
            this.selectCampusModal.config.backdrop = 'static';
            this.selectCampusModal.show();
        }


    }
    campusSelected(element: any) {

    }
    saveCampusName(modal: any) {
        localStorage.setItem('campusName', this.campusName);
        this.selectCampusModal.hide();
        this.redirectToHome();
    }
    redirectToHome(): any {
        if (this.router.url.trim() === '/') {
            this.router.navigate([this.campusName, 'ads'], {
                relativeTo: this.route.parent

            });
        }
    }
    logout() {
        this.user = new User();
        this.clearLocalStorage();
        this.isLoggedIn = false;
        //window.location.reload();
      //  if (this.router.url.trim() === '/') {

            this.router.navigate([this.campusName, 'ads'], {
                relativeTo: this.route.parent.parent.parent
            });
       // }
    }
    clearLocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('image');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
    }
    navigateToProfile(){
         this.router.navigate(['profile','name'], {
            relativeTo: this.route.parent.parent
        });
    }
}
