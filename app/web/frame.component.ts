import { Component } from '@angular/core';

@Component({
  template:  `
    <h2>导航...</h2>
      <a routerLink="/test1" routerLinkActive="active">test1</a>
    <a routerLink="/default" routerLinkActive="active">default</a>
    <a routerLink="/user/test1" routerLinkActive="active">/user/test1</a>
    <a routerLink="/user/test2" routerLinkActive="active">/user/test2</a>
    <a routerLink="/user2/test1" routerLinkActive="active">/user2/test1</a>
    <a routerLink="/user2/test2" routerLinkActive="active">/user2/test2</a>
    <router-outlet></router-outlet>
  `
})
export class FrameComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/