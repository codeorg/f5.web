import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
//import { AppRoutes,AppRouterModule} from './app.routes';
import { AppRouterModule} from './app-router.module';


import { AppComponent } from './app.component';
 import { WebModule } from './web/web.module';
 import { UserModule } from './user/user.module';
 import { User2Module } from './user2/module';
import 'rxjs/Rx';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,         // <-- add this
    ReactiveFormsModule,  // <-- and this
    HttpModule,
    UserModule,
    User2Module,
    WebModule,
    AppRouterModule
    //RouterModule.forRoot(AppRoutes)
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: []
})
export class AppModule {}
