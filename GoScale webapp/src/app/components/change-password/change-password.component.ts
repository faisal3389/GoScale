import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "app/services/login.service";
import { User } from "app/models/user.model";
import { LoginComponent } from "app/components/login/login.component";

@Component({
    moduleId: module.id,
    selector: 'change-password',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{

    password: string = null;
    email: string = null;
    user:User;
    err: boolean = false;
      constructor(private route: ActivatedRoute,private loginService: LoginService, private router: Router){
          this.user = new User();
    }
    ngOnInit(){
        this.route.params.subscribe((params) => {
            this.email = params['emailid'];
        });
    }
    chnagepassword(){
        this.loginService.chnagepassword(this.email, this.password)
               .then(res => {
                    this.router.navigate(['user/registered'], {
                        relativeTo: this.route.parent.parent
                });
        })
        .catch(err => this.err = true);
    }
}
