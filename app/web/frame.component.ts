import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template:  `
    <h2>导航...</h2>
      <a routerLink="/test1" routerLinkActive="active">test1</a>
            <a routerLink="/test2" routerLinkActive="active">test2</a>
    <a routerLink="/default" routerLinkActive="active">default</a>
    <a routerLink="/user/test1" routerLinkActive="active">/user/test1</a>
    <a routerLink="/user/test2" routerLinkActive="active">/user/test2</a>
    <a routerLink="/user2/test1" routerLinkActive="active">/user2/test1</a>
    <a routerLink="/user2/test2" routerLinkActive="active">/user2/test2</a>
    <router-outlet></router-outlet>
  `
})
export class FrameComponent implements OnInit{
  constructor(    private route: ActivatedRoute,
                  private router: Router){
    //console.log("browserId-sss",this.browserId)
  }

  ngOnInit() {
    //子路由要想调用，用this.route.parent
    //this.route.snapshot.data;
  }
}

