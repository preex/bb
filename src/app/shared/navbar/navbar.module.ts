import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatSidenav, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';
import { Router, RouterModule} from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBarComponent  implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  constructor(  private _router: Router, private breakpointObserver: BreakpointObserver) {}

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [ NavBarComponent ]
})
export class NavbarModule { }
