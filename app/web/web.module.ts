import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import {CodeorgModule} from '../codeorg.module';
import {AlertModule}  from 'ng2-bootstrap/components/alert';


import { WebRoutes,Declarations,Providers } from './web.routes';


@NgModule({
  imports: [
    CodeorgModule,
    AlertModule,
    RouterModule.forChild(WebRoutes)
  ],
  declarations: Declarations,
  exports:[RouterModule],
  providers: Providers
})
export class WebModule {}


