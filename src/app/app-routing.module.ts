import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { FormLoginComponent } from './main-content/form-login/form-login.component';
import { FormCadastroComponent } from './main-content/form-cadastro/form-cadastro.component'; 
import { SurgeryRequestModule } from './main-content/surgery-request/surgery-request.module';
import { RequestOrientationComponent } from './main-content/surgery-request/request-orientation/request-orientation.component';
import { RequestStepperComponent } from './main-content/surgery-request/request-stepper/request-stepper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'content', component: MainContentComponent, children: [
    {
      path: 'login', component: FormLoginComponent
    },
    {
      path: 'cadastro', component: FormCadastroComponent
    },
    {
      path: 'profile', component: ProfileComponent
    },
    {
      path: 'surgery-request', component: RequestOrientationComponent
    },
    {
      path:'stepper', component: RequestStepperComponent
    }
  ]}
  
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    SurgeryRequestModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
