import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormLoginComponent } from './main-content/form-login/form-login.component';
import { FormCadastroComponent } from './main-content/form-cadastro/form-cadastro.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'content', component: MainContentComponent, children: [
    {
      path: 'login', component: FormLoginComponent
    },
    {
      path: 'cadastro', component: FormCadastroComponent
    }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
