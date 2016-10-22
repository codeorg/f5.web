import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { Default }    from './default';
import { Login }    from './login';
//import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([

      // { path: '',
      //   component: DefaultComponent
      // },
      //{ path: 'default',  component: DefaultComponent },
      //{ path: 'login',  component: Login },
      { path: '**', component: Default }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class WebRouter{
  constructor(){
    console.log("web路由")
  }
}

