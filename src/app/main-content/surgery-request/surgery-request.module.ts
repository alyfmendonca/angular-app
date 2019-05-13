import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestOrientationComponent } from './request-orientation/request-orientation.component';
import { RequestStepperComponent } from './request-stepper/request-stepper.component';
import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RequestOrientationComponent,
    RequestStepperComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class SurgeryRequestModule { }
