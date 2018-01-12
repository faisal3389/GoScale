import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "app/models/user.model";
import { ProfileService } from "app/services/profile.service";
import { AdResponse } from "app/models/ad-response.model";

@Injectable()
export class UserAdsResolve implements Resolve<AdResponse>{
    constructor(private profileService: ProfileService, private router: Router) {

    }
    resolve(route: ActivatedRouteSnapshot): Promise<AdResponse> {

        let adId = localStorage.getItem("userId");
        let start = "0";
        let limit = "100";
        return this.profileService.getUserAdsByUserId(adId,start,limit).then(response => {
            if (response) {
                try { return response.json(); } catch (e) { return false; }
            } else {
                //   this.router.navigate(['/page-not-found']);
                return false;
            }
        });
    }
}