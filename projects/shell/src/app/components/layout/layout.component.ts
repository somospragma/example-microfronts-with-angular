import { Component, ViewChild,  OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;

  public opened: boolean = true;
  public isSmallView: boolean = true;
  public validateIsSmallView: Subscription = new Subscription();


  constructor(
    private breakpointObserver: BreakpointObserver) { }

  public ngOnInit(): void {
    this.validateIsSmall();
  }

  public ngAfterViewInit(): void {
  }

  public toggleMenu(): void {
    if (this.isSmallView === true) {
      this.opened = !this.opened;
      if (!this.sidenav.opened) {
        this.sidenav.toggle();
      }
    } else {
      this.opened = true;
      this.sidenav.toggle();
    }
  }



  public validateIsSmall(): void {
    this.validateIsSmallView = this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallView = true;
        } else {
          this.opened = true;
          this.isSmallView = false;
        }
      });
  }

  public ngOnDestroy(): void {
    if (this.validateIsSmallView) {
      this.validateIsSmallView.unsubscribe();
    }
  }
}
