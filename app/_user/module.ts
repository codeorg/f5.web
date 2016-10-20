import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';


import { Frame }     from './frame';
import { Default }       from './default';
import { Test1 } from './test1';

import { CrisisCenterRoutingModule } from './router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    Frame,
    Default,
    Test1,
  ],
  providers: [
  ]
})
export class UserModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/