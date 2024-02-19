import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }


  // ngAfterContentInit(): void {
//   this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
//     next: res => {
//       if (res.matches) {
//         this.isSmallScreen = true;
//       } else {
//         this.isSmallScreen = false;
//       }
//     }
//   })
// }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)'])
      .pipe(
        pluck('matches')
      )
      .subscribe(res => this.isSmallScreen = res);
  }



  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
