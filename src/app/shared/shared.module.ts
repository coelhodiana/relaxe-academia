import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './component/material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MaterialModule]
})
export class SharedModule { }
