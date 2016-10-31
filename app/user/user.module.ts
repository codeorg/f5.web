import { NgModule }       from '@angular/core';
import {CodeorgModule} from '../codeorg.module';
import { RouterModule } from '@angular/router';
import { DropdownModule,AlertModule,PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { UserRoutes,Declarations,Providers } from './user.routes';

@NgModule({
  imports: [
    CodeorgModule,
    DropdownModule,
    AlertModule,
    PaginationModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: Declarations,
  exports: [
    RouterModule
  ],
  providers: Providers
})
export class UserModule {}

