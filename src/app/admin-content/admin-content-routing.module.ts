import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AllHospitalsComponent } from './all-hospitals/all-hospitals.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { AllSurgeonsComponent } from './all-surgeons/all-surgeons.component';
import { AprovadasComponent } from './aprovadas/aprovadas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { NewSurgeonComponent } from './new-surgeon/new-surgeon.component';
import { SurgeonDetailsComponent } from './surgeon-details/surgeon-details.component';
import { RealizadasComponent } from './realizadas/realizadas.component';
import { SolicitacoesDetailsComponent } from './solicitacoes-details/solicitacoes-details.component';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';
import { RealizadasDetailsComponent } from './realizadas-details/realizadas-details.component';
import { ApprovedDetailsComponent } from './approved-details/approved-details.component';
import { OtherAllTussResolve } from '../services/other-services/other-service.resolver';
import { SurgeonDetailsAcceptComponent } from './surgeon-details-accept/surgeon-details-accept.component'
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/solicitacoes', pathMatch: 'full' },
  { path:'main', component: MainContentComponent, children: [
    { path: 'profile', component: AdminProfileComponent },
    { path:'allHospitals', component: AllHospitalsComponent },
    { path:'allSurgeons', component: AllSurgeonsComponent },
    { path:'hospitalDetails/:id', component: HospitalDetailsComponent },
    { path:'aprovadas', component: AprovadasComponent },
    { path:'solicitacoes', component: SolicitacoesComponent },
    { path:'tuss-table', component: TussTableComponent , resolve: {
      allTuss: OtherAllTussResolve
    } },
    { path:'new-surgeon', component: NewSurgeonComponent, resolve: {
        allTuss: OtherAllTussResolve
      } 
    },
    { path:'surgeonDetails/:id', component: SurgeonDetailsComponent, resolve: {
      allTuss: OtherAllTussResolve
    }  },
    { path:'realizadas', component: RealizadasComponent },
    { path:'solicitacoesDetails/:id', component: SolicitacoesDetailsComponent },
    { path:'newHospital', component: NewHospitalComponent, resolve: {
      allTuss: OtherAllTussResolve
    }   },
    { path:'realizadaDetails/:id', component: RealizadasDetailsComponent },
    { path:'approvedDetails/:id', component: ApprovedDetailsComponent },
    { path:'solicitacoesDetailsAccept/:id', component: SurgeonDetailsAcceptComponent },


  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContentRoutingModule { }
