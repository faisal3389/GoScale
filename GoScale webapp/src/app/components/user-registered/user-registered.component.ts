import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'user-registered',
    templateUrl: 'user-registered.component.html',
    styleUrls: ['user-registered.component.scss']
})
export class UserRegisteredComponent {
constructor(private route: ActivatedRoute, private router: Router){
    }
 navigateToLogin(){
         this.router.navigate(['login'], {
            relativeTo: this.route.parent.parent
        });
    }
}
