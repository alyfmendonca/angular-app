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
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgxMaskModule} from 'ngx-mask';

        
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
    MatListModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSliderModule,
    ScrollingModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    MatAutocompleteModule,
    NgxMaskModule.forRoot(),
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
    MatListModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule,
    NgxMaskModule,
    MatAutocompleteModule,
  ]
})
export class MaterialComponentsModule { }
