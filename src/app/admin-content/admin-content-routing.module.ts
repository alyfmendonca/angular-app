import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { ProfileComponent } from '../core/profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/profile', pathMatch: 'full' },
  { path:'main', component: MainContentComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path:'tuss-table', component: TussTableComponent }
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminContentRoutingModule { }
