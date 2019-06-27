import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestOrientationComponent } from './surgery-request/request-orientation/request-orientation.component';
import { RequestStepperComponent } from './surgery-request/request-stepper/request-stepper.component';
import { ProfileComponent } from '../core/profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AprovadasSolicitadasComponent } from './aprovadas-solicitadas/aprovadas-solicitadas.component';
import { SurgeryDetailsComponent } from './surgery-details/surgery-details.component';
import { RealizadasComponent } from './realizadas/realizadas.component';
import { ApprovedDetailsComponent } from './approved-details/approved-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainContentComponent, children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
    { path:'request-orientation', component:RequestOrientationComponent },
    { path:'request-stepper', component: RequestStepperComponent },
    { path:'aprovadas-solicitadas', component: AprovadasSolicitadasComponent },
    { path:'surgery', component: SurgeryDetailsComponent },
    { path:'realizadas', component: RealizadasComponent },
    { path:'approvedDetails', component: ApprovedDetailsComponent },

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContentRoutingModule { }
