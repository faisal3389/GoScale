import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-logged-in',
    templateUrl: 'user-logged-in.component.html',
    styleUrls: ['user-logged-in.component.scss']
})
export class UserLoggedInComponent implements OnInit {
   
    ngOnInit() {
       let userId = localStorage.getItem('username');
    }

}
