import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'initial', loadChildren: './inital-content/inital-content.module#InitalContentModule' }, 
  { path: 'user', loadChildren: './user-content/user-content.module#UserContentModule'},
  { path: 'admin', loadChildren: './admin-content/admin-content.module#AdminContentModule' }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
