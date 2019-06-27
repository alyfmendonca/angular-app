import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContentRoutingModule } from './admin-content-routing.module';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { CoreModule } from '../core/core.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AllHospitalsComponent } from './all-hospitals/all-hospitals.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { AllSurgeonsComponent } from './all-surgeons/all-surgeons.component';
import { AprovadasComponent } from './aprovadas/aprovadas.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { SurgeonDetailsComponent } from './surgeon-details/surgeon-details.component';
import { NewSurgeonComponent } from './new-surgeon/new-surgeon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { RealizadasComponent } from './realizadas/realizadas.component';
import { SolicitacoesDetailsComponent } from './solicitacoes-details/solicitacoes-details.component';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';
import { RealizadasDetailsComponent } from './realizadas-details/realizadas-details.component';
import { ApprovedDetailsComponent } from './approved-details/approved-details.component';


@NgModule({
  declarations: [
    TussTableComponent,
    NavBarComponent,
    MainContentComponent,
    AllHospitalsComponent,
    HospitalDetailsComponent,
    AllSurgeonsComponent,
    AprovadasComponent,
    SolicitacoesComponent,
    NewSurgeonComponent,
    SurgeonDetailsComponent,
    RealizadasComponent,
    SolicitacoesDetailsComponent,
    NewHospitalComponent,
    RealizadasDetailsComponent,
    ApprovedDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminContentRoutingModule,
    CoreModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollDispatchModule,
  ]
})
export class AdminContentModule { }
