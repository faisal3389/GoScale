// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { InvalidComponent } from './invalid.component';
import { InvalidRoutingModule } from "app/components/invalid/invalid-routing.module";

@NgModule({
    imports: [ InvalidRoutingModule,

    ],
    declarations: [
        InvalidComponent,
    ],
    exports: [
        InvalidComponent,
    ]
})
export class InvalidModule {

}
