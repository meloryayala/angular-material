import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  startDate = new Date(2024, 2, 23)
  minDate = new Date(2024, 2, 22)
  maxDate = new Date(2024, 6, 23)

  constructor(private platform: Platform) {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS
  }
}
