// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from "app/components/change-password/change-password-routing.module";

@NgModule({
    imports: [ ChangePasswordRoutingModule

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
