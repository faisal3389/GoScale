import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'invalid',
    templateUrl: 'invalid.component.html',
    styleUrls: ['invalid.component.scss']
})
export class InvalidComponent{
    

    constructor(private route: ActivatedRoute, private router: Router){
    }
    navigateToLogin(){
         this.router.navigate(['login'], {
            relativeTo: this.route.parent.parent
        });
    }
}
