import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContentRoutingModule } from './user-content-routing.module';
import { RequestOrientationComponent } from './surgery-request/request-orientation/request-orientation.component';
import { RequestStepperComponent } from './surgery-request/request-stepper/request-stepper.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    RequestOrientationComponent,
    RequestStepperComponent,
    NavBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    UserContentRoutingModule,
    MaterialComponentsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserContentModule { }
