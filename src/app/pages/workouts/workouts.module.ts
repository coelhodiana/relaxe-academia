import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';

@NgModule({
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    SharedModule
  ],
  declarations: [WorkoutsComponent, ExerciseComponent],
})
export class WorkoutsModule { }
