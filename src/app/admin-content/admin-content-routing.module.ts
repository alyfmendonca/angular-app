import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { ProfileComponent } from '../core/profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AllHospitalsComponent } from './all-hospitals/all-hospitals.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { AllSurgeonsComponent } from './all-surgeons/all-surgeons.component';
import { AprovadasComponent } from './aprovadas/aprovadas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { NewSurgeonComponent } from './new-surgeon/new-surgeon.component';
import { SurgeonDetailsComponent } from './surgeon-details/surgeon-details.component';
import { RealizadasComponent } from './realizadas/realizadas.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/profile', pathMatch: 'full' },
  { path:'main', component: MainContentComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path:'allHospitals', component: AllHospitalsComponent },
    { path:'allSurgeons', component: AllSurgeonsComponent },
    { path:'hospitalDetails', component: HospitalDetailsComponent },
    { path:'aprovadas', component: AprovadasComponent },
    { path:'solicitacoes', component: SolicitacoesComponent },
    { path:'tuss-table', component: TussTableComponent },
    { path:'new-surgeon', component: NewSurgeonComponent },
    { path:'surgeonDetails', component: SurgeonDetailsComponent },
    { path:'realizadas', component: RealizadasComponent },
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContentRoutingModule { }
