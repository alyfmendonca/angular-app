import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestOrientationComponent } from './surgery-request/request-orientation/request-orientation.component';
import { RequestStepperComponent } from './surgery-request/request-stepper/request-stepper.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AprovadasSolicitadasComponent } from './aprovadas-solicitadas/aprovadas-solicitadas.component';
import { SurgeryDetailsComponent } from './surgery-details/surgery-details.component';
import { RealizadasComponent } from './realizadas/realizadas.component';
import { ApprovedDetailsComponent } from './approved-details/approved-details.component';
import { RequestConfirmationComponent } from './surgery-request/request-confirmation/request-confirmation.component';
import { RealizadaDetailsComponent } from './realizada-details/realizada-details.component';
import { OtherAllTussResolve } from '../services/other-services/other-service.resolve';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/profile', pathMatch: 'full' },
  { path: 'main', component: MainContentComponent, children: [
    { path: 'profile', component: UserProfileComponent },
    { path:'request-orientation', component:RequestOrientationComponent },
    { path:'request-stepper', component: RequestStepperComponent},
    { path:'request-confirmation', component: RequestConfirmationComponent },
    { path:'aprovadas-solicitadas', component: AprovadasSolicitadasComponent },
    { path:'surgery/:id', component: SurgeryDetailsComponent },
    { path:'realizadas', component: RealizadasComponent },
    { path:'approvedDetails', component: ApprovedDetailsComponent },
    { path:'realizadaDetails/:id', component: RealizadaDetailsComponent },
    

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContentRoutingModule { }
