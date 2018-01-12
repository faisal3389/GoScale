import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FacebookModule } from 'ngx-facebook';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { NgxGoogleSignInModule } from 'ngx-google-sign-in';

@NgModule({
    imports: [SharedModule, LoginRoutingModule, FormsModule, FacebookModule.forRoot(),
         MatFormFieldModule, NgxGoogleSignInModule.forRoot(), MatInputModule, MatDialogModule, MatRadioModule],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
