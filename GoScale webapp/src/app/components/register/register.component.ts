import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

constructor(private route: ActivatedRoute, private router: Router){
    }
 navigateToLogin(){
         this.router.navigate(['login'], {
            relativeTo: this.route.parent.parent
        });
    }
}
