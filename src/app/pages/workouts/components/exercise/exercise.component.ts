import { Component, Input } from '@angular/core';

import { Workout } from './../../interface/workout';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() exercise?: Workout;

}
