import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { InitalContentRoutingModule } from './inital-content-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPassForgotComponent } from './new-pass-forgot/new-pass-forgot.component';


@NgModule({
  declarations: [
    FormLoginComponent,
    FormCadastroComponent,
    NavBarComponent,
    MainContentComponent,
    NewPasswordComponent,
    ForgotPasswordComponent,
    NewPassForgotComponent
  ],
  imports: [
    CommonModule,
    InitalContentRoutingModule,
    CoreModule,
    FormsModule,
    MaterialComponentsModule,
    ScrollDispatchModule
  ]
})
export class InitalContentModule { }
