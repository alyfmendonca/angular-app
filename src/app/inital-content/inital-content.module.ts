import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitalContentRoutingModule } from './inital-content-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    FormLoginComponent,
    FormCadastroComponent,
    NavBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    InitalContentRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class InitalContentModule { }
