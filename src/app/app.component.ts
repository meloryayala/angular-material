import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe(res => this.isSmallScreen = res.matches);

  }


  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
