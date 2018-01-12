import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModules } from './common.modules';
/* App Root */
import { AppComponent } from './app.component';
/* Routing Module */
import { AppRoutingModule, routes } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModules,
        AppRoutingModule,
        // RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
