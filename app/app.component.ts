import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router1</h1>
    <div>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  //hello = 'Hello World!1 router';
}
