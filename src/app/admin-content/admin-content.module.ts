import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContentRoutingModule } from './admin-content-routing.module';
import { TussTableComponent } from './tuss-table/tuss-table.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { CoreModule } from '../core/core.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    TussTableComponent,
    NavBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    AdminContentRoutingModule,
    CoreModule
  ]
})
export class AdminContentModule { }
