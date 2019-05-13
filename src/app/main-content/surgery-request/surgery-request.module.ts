import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestOrientationComponent } from './request-orientation/request-orientation.component';
import { RequestStepperComponent } from './request-stepper/request-stepper.component';

@NgModule({
  declarations: [
    RequestOrientationComponent,
    RequestStepperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SurgeryRequestModule { }
