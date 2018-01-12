// Angular Imports
import { NgModule } from '@angular/core';
// This Module's Components
import { AdDetailsComponent } from './ad-details.component';
import { AdDetailsRoutingModule } from './ad-details-routing.module';
import { SharedModule } from '../../../../shared/shared.module'
import { CarouselModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [ SharedModule, ModalModule, AdDetailsRoutingModule,CarouselModule.forRoot()

    ],
    declarations: [
        AdDetailsComponent,
    ],
    exports: [
        AdDetailsComponent,
    ]
})
export class AdDetailsModule {

}
