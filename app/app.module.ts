import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ROUTES,USEHASH } from './app.routes';
import { Http } from './service/http';

import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { UserModule } from './user/user.module';
import { User2Module } from './user2/module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,         // <-- add this
    ReactiveFormsModule,  // <-- and this
    HttpModule,
    UserModule,
    User2Module,
    WebModule,
    RouterModule.forRoot(ROUTES,USEHASH)
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [Http]
})
export class AppModule {}
