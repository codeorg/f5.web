// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  template: `
    <h2>登入</h2>
    <a routerLink="/default" routerLinkActive="active">首页</a>
    <a routerLink="/login" routerLinkActive="active">登入</a>
      <a routerLink="/index" routerLinkActive="active">/index</a>
    <a routerLink="/test1" routerLinkActive="active">test1</a>
    <a routerLink="/user2" routerLinkActive="active">user2</a>
        <a routerLink="/user/user1" routerLinkActive="active">/user/user1</a>
                <a routerLink="/user2/user1" routerLinkActive="active">/user/user1</a>
        
  `
})
export class Login implements OnInit {
  heroes: [{"id":"10",name:"ssss"},{"id":"101",name:"101sss"}];

  private selectedId: number;

  constructor(
    //private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
   /* this.route.params.forEach((params: Params) => {
        this.selectedId = +params['id'];
        this.service.getHeroes()
          .then(heroes => this.heroes = heroes);
      });*/
  }

  //isSelected(hero: Hero) { return hero.id === this.selectedId; }

 /* onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }*/

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/