import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { utility } from './service/utility';

import { AppComponent } from './app.component';

import { WebModule }         from './web/web.module';
import { UserModule }         from './user/user.module';
import { User2Module }         from './user2/module';


@NgModule({
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,UserModule,User2Module,WebModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: []
})
export class AppModule {
  constructor(){
    utility.browserId();
  }
}
