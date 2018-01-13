import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ModalModule } from "ngx-bootstrap";

@NgModule({
    imports: [SharedModule,ModalModule.forRoot(), LoginRoutingModule, FormsModule,
         MatFormFieldModule, MatInputModule, MatDialogModule, MatRadioModule, MatDatepickerModule,MatNativeDateModule],
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
