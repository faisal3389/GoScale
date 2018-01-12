import { Component, OnInit, Inject } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { User } from "app/models/user.model";
import { UserResponse } from "app/models/base-response.model";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Address } from "app/models/address.model";
import { AdResponse } from "app/models/ad-response.model";
import { Ads } from "app/models/ad.model";
import { ProfileService } from "app/services/profile.service";


@Component({
    
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public userProfile: User;
    public checkForField:string;
    public address:Address;
    public adsList:Array<Ads>;
    public userMobile: string;
    public newUserForMobileUpdate: User;
    public newUserForAddressUpdate: User;
    constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog, private profileService: ProfileService){
        this.newUserForMobileUpdate = new User();
    }

    ngOnInit() {
        let userId = localStorage.getItem('userId');
        this.route.data
            .subscribe((data: { userResponse: UserResponse, userAds: AdResponse }) => {
                if (data.userResponse.user) {
                    this.userProfile = data.userResponse.user;
                    if(this.userProfile.address){
                        this.address = this.userProfile.address;
                        //console.log("addressfrom Oninit = ",  this.address.room)
                    }
                    this.userMobile = this.userProfile.userMobile;  
                }
                if(data.userAds.ads){
                    //console.log("ads=", data.userAds.ads);
                    this.adsList = data.userAds.ads;
                    //console.log("ads=", this.adsList);
                }
            })
    }
    //   openDialogemail(): void {
    //         let dialogRef = this.dialog.open(UserEmailDialog, {
    //         width: '380px',
    //         height: '250px',
    //         data: { entity: this.userProfile.userEmail, name:this.userProfile.firstName }
    //         });

    //         dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //         //this.animal = result;
    //         });
    //     }
        openDialogMobile(){
            this.checkForField = "mobile";
            let dialogRef = this.dialog.open(UserMobileDialog, {
            width: '380px',
            height: '250px',
            data: { entity: this.userProfile.userMobile, name:this.userProfile.firstName, checkForField:this.checkForField }
            });

            dialogRef.afterClosed().subscribe(userMobile => {
                this.userProfile.userMobile = userMobile;
                this.updateUserProfileUserMobile(this.userProfile);
            });
        }
        // openDialogPassword(){
        //     this.checkForField = "password";
        //     let dialogRef = this.dialog.open(UserMobileDialog, {
        //     width: '380px',
        //     height: '250px',
        //     data: { entity: this.userProfile.password, name:this.userProfile.firstName, checkForField:this.checkForField }
        //     });

        //     dialogRef.afterClosed().subscribe(password => {
        //         this.userProfile.password = password;
        //         this.updateUserProfileUserPassword(this.userProfile);
        //     });
        // }
        //  openDialogUserName(){
        //     this.checkForField = "Name";
        //     let dialogRef = this.dialog.open(UserMobileDialog, {
        //     width: '380px',
        //     height: '250px',
        //     data: { entity: this.userProfile.firstName, name:this.userProfile.firstName, checkForField:this.checkForField }
        //     });

        //     dialogRef.afterClosed().subscribe(firstName => {
        //         this.userProfile.firstName = firstName;
        //         this.updateUserProfileUserName(this.userProfile);
        //     });
        // }
        // openDialogAddress(){
        //     console.log("address3 = ", this.userProfile.address )
        //     let dialogRef = this.dialog.open(UserAddressDialog, {
        //     width: '410px',
        //     height: '450px',
        //     data: { room: this.address.room, 
        //             locality:this.address.locality,
        //             city: this.address.city,
        //             state:this.address.state,
        //             zipcode:this.address.zipCode,
        //             name:this.userProfile.firstName}
        //     });

        //     dialogRef.afterClosed().subscribe((data1: {
        //         room, locality, zipcode, city, state
        //     }) => {console.log("address1 = ", this.userProfile.address );
        //         if(data1.room){
        //          this.userProfile.address.room = data1.room;
        //         }
        //         if(data1.locality){this.userProfile.address.locality = data1.locality;
        //         }
        //         if(data1.city){
        //          this.userProfile.address.city = data1.city;
        //         }
        //         if(data1.state){
        //          this.userProfile.address.state = data1.state;
        //         }
        //         if(data1.zipcode){
        //          this.userProfile.address.zipCode = data1.zipcode;
        //         }
        //          this.updateUserProfileUserAddress(this.userProfile);
        //         });
        // }
        updateUserProfileUserMobile(userProfile: User){
            this.newUserForMobileUpdate.userMobile = userProfile.userMobile;
            this.newUserForMobileUpdate.userId = userProfile.userId;
            this.profileService.updateUserMobile(this.newUserForMobileUpdate)
            .then((res)=>{
                //window.location.reload();
                console.log(res);
                })
            .catch((err)=>{

            })
        }
        // updateUserProfileUserPassword(userProfile: User){
        //     this.newUserForMobileUpdate = new User();
        //     this.newUserForMobileUpdate.password = userProfile.password;
        //     this.newUserForMobileUpdate.userId = userProfile.userId;
        //     this.profileService.updateUserPassword(this.newUserForMobileUpdate)
        //     .then((res)=>{
        //         //window.location.reload();
        //         console.log(res);
        //         })
        //     .catch((err)=>{

        //     })
        // }
        // updateUserProfileUserName(userProfile: User){
        //     this.newUserForMobileUpdate = new User();
        //     this.newUserForMobileUpdate.firstName = userProfile.firstName;
        //     this.newUserForMobileUpdate.userId = userProfile.userId;
        //     this.profileService.updateUserName(this.newUserForMobileUpdate)
        //     .then((res)=>{
        //         //window.location.reload();
        //         console.log(res);
        //         })
        //     .catch((err)=>{

        //     })
        // }
        // updateUserProfileUserAddress(userProfile: User){
        //     this.newUserForAddressUpdate = new User();
        //     console.log("address2 = ", userProfile.address )
        //     this.newUserForAddressUpdate.address.room = userProfile.address.room;
        //     this.newUserForAddressUpdate.address.locality = userProfile.address.locality;
        //     this.newUserForAddressUpdate.address.city = userProfile.address.city;
        //     this.newUserForAddressUpdate.address.state = userProfile.address.state;
        //     this.newUserForAddressUpdate.address.zipCode = userProfile.address.zipCode;
        //     this.newUserForAddressUpdate.userId = userProfile.userId;
        //     this.profileService.updateUserAdress(this.newUserForAddressUpdate)
        //     .then((res)=>{
        //         window.location.reload();
        //         console.log(res);
        //         })
        //     .catch((err)=>{

        //     })
        // }
}

@Component({
  selector: 'email-edit-dialog',
  templateUrl: 'email-edit-dialog.html',
  styleUrls: ['email-edit-dialog.scss'],
  providers : [ProfileComponent],
})
    export class UserMobileDialog {

    constructor(
        public dialogRef: MatDialogRef<UserMobileDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            
        }

    onNoClick(): void {
        this.dialogRef.close();
    }
    // saveMobile(newMobile:string){
    //         this.profileComponent.userMobile = newMobile;
    //     this.profileComponent.userMobile = newMobile;
    // }
}

@Component({
  selector: 'address-edit-dialog',
  templateUrl: 'address-edit-dialog.html',
  styleUrls: ['email-edit-dialog.scss']
})
    export class UserAddressDialog {

    constructor(
        public dialogRef: MatDialogRef<UserAddressDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            console.log("Injected to HTML", data)
        }

    onNoClick(): void {
        this.dialogRef.close();
    }
}