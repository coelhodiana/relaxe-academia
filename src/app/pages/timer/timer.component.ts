import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { scan, takeWhile, timer } from 'rxjs';

import { SharedModule } from './../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class TimerComponent {
  form = this.fb.group({
    duration: 100,
  });

  resting = false;

  seriesCount = 1;

  timer$: any;

  constructor(private fb: FormBuilder) {}

  startRest() {
    this.resting = true;

    const duration = this.form.value.duration ? this.form.value.duration : 0;

    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, duration),
      takeWhile((x) => x >= 0)
    );

    setTimeout(() => {
      this.resting = false;
    }, duration * 1000)

    this.seriesCount++;
  }

  resetSeries() {
    this.seriesCount = 1;
  }
}
