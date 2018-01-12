// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from "app/components/forgot-password/forgot-password-routing.module";

@NgModule({
    imports: [ ForgotPasswordRoutingModule,

    ],
    declarations: [
        ForgotPasswordComponent,
    ],
    exports: [
        ForgotPasswordComponent,
    ]
})
export class ForgotPasswordModule {

}
