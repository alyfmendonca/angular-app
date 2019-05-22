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

@NgModule({
  declarations: [
    TussTableComponent,
    NavBarComponent,
    MainContentComponent,
    AllHospitalsComponent,
    HospitalDetailsComponent,
    AllSurgeonsComponent
  ],
  imports: [
    CommonModule,
    AdminContentRoutingModule,
    CoreModule,
    MaterialComponentsModule
  ]
})
export class AdminContentModule { }
