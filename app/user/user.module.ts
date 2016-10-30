import { NgModule }       from '@angular/core';
import {CodeorgModule} from '../codeorg.module';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';

import { UserRoutes,Declarations,Providers } from './user.routes';

@NgModule({
  imports: [
    CodeorgModule,
    DropdownModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: Declarations,
  exports: [
    RouterModule
  ],
  providers: Providers
})
export class UserModule {}

