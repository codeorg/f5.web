import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { HomeComponent } from './homem';
import { HeroesModule }         from './heroes.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule,HeroesModule
  ],
  providers: []
})
export class AppModule {}
