import { NgModule }       from '@angular/core';
import {CodeorgModule} from '../codeorg.module';
import { RouterModule } from '@angular/router';

import { FrameComponent }     from './frame.component';
import { DefaultComponent }       from './default.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';

import { UserRouterModule } from './user-router.module';

@NgModule({
  imports: [
    CodeorgModule,
    UserRouterModule
  ],
  declarations: [
    FrameComponent,
    DefaultComponent,
    Test1Component,
    Test2Component,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class UserModule {}

