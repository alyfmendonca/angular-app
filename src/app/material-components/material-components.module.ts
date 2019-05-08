import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
   
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule, 
    BrowserAnimationsModule
  ]
})
export class MaterialComponentsModule { }
