import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { scan, takeWhile, timer } from 'rxjs';

import { SharedModule } from './../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class TimerComponent implements OnInit {
  form = this.fb.group({
    duration: [
      100,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
  });

  resting = false;

  seriesCount = 1;

  timer$: any;

  inputFocused = false;

  @ViewChild('inputDuration') inputDuration!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  startRest() {
    this.resting = true;

    const duration = this.form.value.duration ? this.form.value.duration : 0;

    this.timer$ = timer(0, 1000).pipe(
      scan((acc) => --acc, duration),
      takeWhile((x) => x >= 0)
    );

    setTimeout(() => {
      this.resting = false;
    }, duration * 1000);

    this.seriesCount++;
  }

  resetSeries() {
    this.seriesCount = 1;
  }

  edit() {
    this.inputDuration.nativeElement.focus();
  }
}
