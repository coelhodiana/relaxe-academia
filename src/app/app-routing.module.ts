import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/timer/timer.component').then((mod) => mod.TimerComponent),
  },
  {
    path: 'treinos',
    loadChildren: () =>
      import('./pages/workouts/workouts.module').then((m) => m.WorkoutsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
