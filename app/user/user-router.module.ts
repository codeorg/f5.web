import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { DefaultComponent }       from './default.component';
import { FrameComponent }     from './frame.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user',
        component: FrameComponent,
        children: [
          {
            path: 'test1',
            component: Test1Component
          },
          {
            path: 'test2',
            component: Test2Component
          }
          // {
          //   path: '',
          //   component: DefaultComponent,
          //   children: [
          //     {
          //       path: 'test1',
          //       component: Test1Component
          //     },
          //     {
          //       path: 'test2',
          //       component: Test2Component
          //     }
          //   ]
          // }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CrisisDetailResolve
  ]
})
export class UserRouterModule { }

