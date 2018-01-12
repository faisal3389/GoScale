import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "app/models/user.model";
import { ProfileService } from "app/services/profile.service";

@Injectable()
export class ProfileResolve implements Resolve<User>{
    constructor(private profileService: ProfileService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<User> {

        let adId = localStorage.getItem("userId");
        
        return this.profileService.getUserProfileByUserId(adId).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}