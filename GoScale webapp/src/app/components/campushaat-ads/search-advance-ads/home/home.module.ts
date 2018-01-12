// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../../shared/shared.module';
import { HomeRoutingModule } from "app/components/campushaat-ads/search-advance-ads/home/home-routing.module";
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
    imports: [ SharedModule, HomeRoutingModule, CarouselModule

    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
