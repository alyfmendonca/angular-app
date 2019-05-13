import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material';
   

      
@NgModule({
  declarations: [],
  imports: [
   // MatButtonModule, 
    BrowserAnimationsModule,
    MatCheckboxModule,

    
  ],
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    //MatButtonModule, 
  ]
})
export class MaterialComponentsModule { }
