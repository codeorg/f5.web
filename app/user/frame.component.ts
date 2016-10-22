import { Component } from '@angular/core';

@Component({
  template:  `
      <h2>CRISIS CENTER</h2>
         <a routerLink="/aaa/index" routerLinkActive="active">aaa</a>
    <router-outlet></router-outlet>
  `
})
export class FrameComponent { }


