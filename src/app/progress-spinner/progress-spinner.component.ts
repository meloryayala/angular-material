import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  loading1 = 0;
  loading2 = 0;
  isWaiting = true;
  queryValue = 0
  queryMode: ProgressBarMode = 'query'
  currentBuffer = 0;

  ngOnInit() {
    this.loadingProgress(500, 85)
      .subscribe(i => this.loading1 = i);

    this.loadingProgress(350, 100)
      .subscribe(i => this.currentBuffer = i);

    this.waitingCase();

    concat(
      interval(2000)
        .pipe(
          take(1),
          tap(_ => this.queryMode  = 'determinate')
        ),
      this.loadingProgress(500, 100)
    ).subscribe(i => this.queryValue = i);
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed)
      .pipe(
        map(i => i * 5),
        takeWhile(i => i <= takeUntil)
      );
  }

  waitingCase() {
    setTimeout(() => {
      this.isWaiting = false;
      console.log('waiting over')
      this.loadingProgress(500, 100).subscribe(i => this.loading2 = i)
    }, 2000)
  }
}
