import { NgModule }       from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import {BankSortPipe} from './pipe';

import { FrameComponent }     from './frame.component';
import { DefaultComponent }       from './default.component';
import { RegOkComponent } from './reg-ok.component';
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
    RegOkComponent,
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


