import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ROUTES } from './app.routes';
import { Http } from './service/http';

import { AppComponent } from './app.component';
import { WebModule }         from './web/web.module';
import { UserModule }         from './user/user.module';
import { User2Module }         from './user2/module';



let useH:any= null;
let userAgent = window.navigator.userAgent;
if (/msie/i.test(userAgent)) {
  useH = {useHash: true};
}
useH = {useHash: true};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,         // <-- add this
    ReactiveFormsModule,  // <-- and this
    HttpModule,
    UserModule,
    User2Module,
    WebModule,
    RouterModule.forRoot(ROUTES,useH)
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [Http]
})
export class AppModule {
  constructor(){
    //utility.browserId();
  }
}
