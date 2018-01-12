// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AdListComponent } from './ad-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AdListRoutingModule } from './ad-list-routing.module';
import { CarouselModule, ModalModule } from 'ngx-bootstrap';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
    imports: [
        SharedModule, ModalModule, AdListRoutingModule, CarouselModule, InfiniteScrollModule
    ],

    declarations: [
        AdListComponent,
    ],
    exports: [
        AdListComponent,
    ]
})
export class AdListModule {

}


