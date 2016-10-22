import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  template: `
aaaaaaaa


    <router-outlet></router-outlet>
  `
})
export class DefaultComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }



  ngOnInit() {

  }

}
