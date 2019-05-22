import { NgModule } from '@angular/core';


import {MatCheckboxModule} from '@angular/material/';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
   

      
@NgModule({
  declarations: [],
  imports: [
   // MatButtonModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule, 
    MatTableModule,
  ],
  exports: [
    MatCheckboxModule,
    MatStepperModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
  ]
})
export class MaterialComponentsModule { }