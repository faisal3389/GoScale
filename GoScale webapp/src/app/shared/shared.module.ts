import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { AdResponse } from '../models/ad-response.model';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
    imports: [CommonModule],
    declarations: [AwesomePipe, HighlightDirective],
    exports: [AwesomePipe, HighlightDirective,
        CommonModule, FormsModule, InfiniteScrollModule]
})
export class SharedModule {

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
