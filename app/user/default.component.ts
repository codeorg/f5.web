import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  template: `
<button (click)="onClick()">btn</button>


    <router-outlet></router-outlet>
  `
})
export class DefaultComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  onClick(){
    console.log(111)
  }

  ngOnInit() {

  }

}
