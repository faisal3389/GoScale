// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from "app/components/register/register-routing.module";

@NgModule({
    imports: [ RegisterRoutingModule,

    ],
    declarations: [
        RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ]
})
export class RegisterModule {

}
