import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrameComponent }     from './frame.component';
import { DefaultComponent }       from './default.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';

import { UserRouterModule } from './user-router.module';
import {TestPipe,BankSortPipe} from './pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRouterModule
  ],
  declarations: [
    FrameComponent,
    DefaultComponent,
    Test1Component,
    Test2Component,
    TestPipe,
    BankSortPipe,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class UserModule {}

