import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainContentModule } from './main-content/main-content.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MainContentModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
