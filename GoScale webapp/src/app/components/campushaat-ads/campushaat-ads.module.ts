// Angular Imports
import { NgModule } from '@angular/core';

import { MatDialogModule, MatInputModule, MatButtonModule ,MatMenuModule,MatIconModule } from '@angular/material';

import { ModalModule } from 'ngx-bootstrap';

// This Module's Components
import { SharedModule } from '../../shared/shared.module';
import { CampushaatAdsComponent } from './campushaat-ads.component';
import { LoginModule } from '../login/login.module'
import { CampushaatAdsRoutingModule } from './campushaat-ads-routing.module';

@NgModule({
    imports: [SharedModule, CampushaatAdsRoutingModule, ModalModule.forRoot(),
         MatDialogModule, MatInputModule, MatButtonModule, MatMenuModule, LoginModule, MatIconModule ],
    declarations: [
        CampushaatAdsComponent,

    ],
    exports: [
        CampushaatAdsComponent
    ],
    entryComponents: [

    ],
})
export class CampushaatAdsModule {

}
