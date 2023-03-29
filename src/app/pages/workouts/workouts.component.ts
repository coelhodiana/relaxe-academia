import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkoutService } from './service/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {
  trains$: Observable<any> = this.service.getWorkouts();

  constructor(private service: WorkoutService) {}
}
