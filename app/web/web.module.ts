import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import {CodeorgModule} from '../codeorg.module';

import { FrameComponent }     from './frame.component';
import { DefaultComponent }       from './default.component';
import { RegOkComponent } from './reg-ok.component';
import {RegComponent} from './reg.component';

import {ErrorComponent} from './error.component';

import { WebRouterMoudule } from './web-router.module';


@NgModule({
  imports: [
    CodeorgModule,
    WebRouterMoudule
  ],
  declarations: [
    FrameComponent,
    DefaultComponent,
    RegOkComponent,
    RegComponent,
    ErrorComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class WebModule {}


