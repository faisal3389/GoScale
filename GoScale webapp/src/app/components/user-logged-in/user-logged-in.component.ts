import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-logged-in',
    templateUrl: 'user-logged-in.component.html',
    styleUrls: ['user-logged-in.component.scss']
})
export class UserLoggedInComponent implements OnInit {
   
   username: string;
   constructor(){
        this.username = localStorage.getItem('username');
   }
    ngOnInit() {
       this.username = localStorage.getItem('username');
       console.log("name = ", localStorage.getItem('username'))
    }

}
