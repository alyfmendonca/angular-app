import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
   

      
@NgModule({
  declarations: [],
  imports: [
   // MatButtonModule, 
    BrowserAnimationsModule,
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

    
  ],
  exports: [
    BrowserAnimationsModule,
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
  ]
})
export class MaterialComponentsModule { }
