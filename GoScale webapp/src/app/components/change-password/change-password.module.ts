// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from "app/components/change-password/change-password-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [ ChangePasswordRoutingModule, SharedModule

    ],
    declarations: [
        ChangePasswordComponent,
    ],
    exports: [
        ChangePasswordComponent,
    ]
})
export class ChangePasswordModule {

}
