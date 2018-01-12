// Angular Imports
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchAdvanceAdsRoutingModule } from './search-advance-ads-routing.module';
// This Module's Components
import { SearchAdvanceAdsComponent } from './search-advance-ads.component';
import { CarouselModule, ModalModule } from 'ngx-bootstrap';
import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
    imports: [SharedModule, SearchAdvanceAdsRoutingModule, ModalModule, CarouselModule.forRoot()

    ],
    declarations: [
        SearchAdvanceAdsComponent
    ],
    exports: [
        SearchAdvanceAdsComponent

    ]
})
export class SearchAdvanceAdsModule {

}
