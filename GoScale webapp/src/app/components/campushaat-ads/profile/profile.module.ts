// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ProfileComponent, UserMobileDialog, UserAddressDialog } from './profile.component';
import { SharedModule } from "app/shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDialogModule } from "@angular/material";

@NgModule({
    imports: [ SharedModule, ProfileRoutingModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatDialogModule

    ],
    entryComponents: [
    UserMobileDialog, UserAddressDialog
  ],
    declarations: [
        ProfileComponent, UserMobileDialog, UserAddressDialog
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {

}
