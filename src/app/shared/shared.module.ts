import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './component/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [MaterialModule],
})
export class SharedModule {}
