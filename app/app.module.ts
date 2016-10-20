import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { HomeComponent } from './homem';
import { WebModule }         from './web/module';
import { UserModule }         from './user/module';
import { User2Module }         from './user2/module';

@NgModule({
  imports: [BrowserModule,UserModule,User2Module,WebModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: []
})
export class AppModule {}
