import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OtherAllTussResolve } from '../services/other-services/other-service.resolve';

const routes: Routes = [
  { path: 'main', component: MainContentComponent, children: [
    { path:'login', component: FormLoginComponent },
    { path:'cadastro', component: FormCadastroComponent , resolve: {
      allTuss: OtherAllTussResolve
    }   }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitalContentRoutingModule { }
