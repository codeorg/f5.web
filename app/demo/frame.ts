import { Component } from '@angular/core';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
         <a routerLink="/aaa/index" routerLinkActive="active">aaa</a>
    <router-outlet></router-outlet>
  `
})
export class Frame { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/