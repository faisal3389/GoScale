// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { FavouriteadsComponent } from './favouriteads.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FavouriteadsRoutingModule } from './favouriteads-routing.module';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
    imports: [ SharedModule, FavouriteadsRoutingModule//, InfiniteScrollModule

    ],
    declarations: [
        FavouriteadsComponent,
    ],
    exports: [
        FavouriteadsComponent,
    ]
})
export class FavouriteadsModule {

}
