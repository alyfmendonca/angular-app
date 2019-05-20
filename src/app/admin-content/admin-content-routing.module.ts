import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { ProfileComponent } from '../core/profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AllHospitalsComponent } from './all-hospitals/all-hospitals.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/profile', pathMatch: 'full' },
  { path:'main', component: MainContentComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path:'allHospitals', component: AllHospitalsComponent },
    { path:'tuss-table', component: TussTableComponent }
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContentRoutingModule { }
