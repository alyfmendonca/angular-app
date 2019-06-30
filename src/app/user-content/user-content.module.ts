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
import { AprovadasSolicitadasComponent } from './aprovadas-solicitadas/aprovadas-solicitadas.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { SurgeryDetailsComponent } from './surgery-details/surgery-details.component';
import { RealizadasComponent } from './realizadas/realizadas.component';
import { ApprovedDetailsComponent } from './approved-details/approved-details.component';
import { RequestConfirmationComponent } from './surgery-request/request-confirmation/request-confirmation.component';
import { RealizadaDetailsComponent } from './realizada-details/realizada-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    RequestOrientationComponent,
    RequestStepperComponent,
    NavBarComponent,
    MainContentComponent,
    AprovadasSolicitadasComponent,
    SurgeryDetailsComponent,
    RealizadasComponent,
    ApprovedDetailsComponent,
    RequestConfirmationComponent,
    RealizadaDetailsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserContentRoutingModule,
    MaterialComponentsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollDispatchModule
  ]
})
export class UserContentModule { }
