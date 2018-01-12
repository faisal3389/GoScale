// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UserRegisteredComponent } from './user-registered.component';
import { UserRegisteredRoutingModule } from "app/components/user-registered/user-registered-routing.module";

@NgModule({
    imports: [ UserRegisteredRoutingModule

    ],
    declarations: [
        UserRegisteredComponent,
    ],
    exports: [
        UserRegisteredComponent,
    ]
})
export class UserRegisteredModule {

}
