import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
    FormLoginComponent,
    MainContentComponent 
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FormLoginComponent
  ]
})
export class MainContentModule { }
