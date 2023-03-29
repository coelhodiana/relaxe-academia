import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent } from './workouts.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent 
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule {};
