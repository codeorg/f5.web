import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

import { Frame }     from './frame';
import { Default }       from './default';
import { Test1 } from './test1';
import { Test2 } from './test2';

import { Router } from './router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Router
  ],
  declarations: [
    Frame,
    Default,
    Test1,
    Test2
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class User2Module {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */