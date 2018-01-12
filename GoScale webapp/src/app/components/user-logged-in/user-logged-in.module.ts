// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UserLoggedInComponent } from './user-logged-in.component';
import { UserLoggedInRoutingModule } from "app/components/user-logged-in/user-logged-in-routing.module";

@NgModule({
    imports: [ UserLoggedInRoutingModule

    ],
    declarations: [
        UserLoggedInComponent,
    ],
    exports: [
        UserLoggedInComponent,
    ]
})
export class UserLoggedInModule {

}
