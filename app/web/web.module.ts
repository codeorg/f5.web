import { NgModule }       from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import {BankSortPipe,TestPipe} from '../service/pipe';

import { FrameComponent }     from './frame.component';
import { DefaultComponent }       from './default.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import {RegComponent} from './reg.component';
import {ErrorComponent} from './error.component';

import { WebRouterMoudule } from './web-router.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebRouterMoudule
  ],
  declarations: [
    FrameComponent,
    DefaultComponent,
    Test1Component,
    Test2Component,
    RegComponent,
    ErrorComponent,
    BankSortPipe
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class WebModule {}


