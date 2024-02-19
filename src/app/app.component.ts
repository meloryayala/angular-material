import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';


export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isSmallScreen = false;
  popText  = false;
  applyShadow = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(
        map(() => content.scrollTop)
      )
      .subscribe({
        next: (value: number) => this.determineHeader(value)
      })
  }

  determineHeader(top: number) {
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT
  }

  ngAfterContentInit(): void {
    console.log(top)
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe(res => this.isSmallScreen = res.matches);
  }


  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
