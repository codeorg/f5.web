import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
//import { HomeComponent } from './homem';
import { WebModule }         from './web/web.module';
import { UserModule }         from './user/user.module';
import { User2Module }         from './user2/module';

@NgModule({
  imports: [BrowserModule,HttpModule,UserModule,User2Module,WebModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: []
})
export class AppModule {}
