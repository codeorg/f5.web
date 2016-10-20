import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  template: `
aaaaaaaa


    <router-outlet></router-outlet>
  `
})
export class Default implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit() {

  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/