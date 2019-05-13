import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormsModule }   from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { TussTableComponent } from './tuss-table/tuss-table.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FormLoginComponent,
    MainContentComponent,
    FormCadastroComponent,
    ProfileComponent,
    TussTableComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    FormLoginComponent
  ]
})
export class MainContentModule { }
