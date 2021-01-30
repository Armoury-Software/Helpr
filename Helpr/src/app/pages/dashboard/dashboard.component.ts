import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DashboardSettingsComponent } from './subpages/dashboard-settings/dashboard-settings.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // tslint:disable-next-line: no-any
  public componentSubject$: BehaviorSubject<any> = new BehaviorSubject(DashboardSettingsComponent);

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          if (this.route.firstChild?.snapshot.data.subpageComponent) {
            this.componentSubject$.next(this.route.firstChild?.snapshot.data.subpageComponent);
          }
        }
    });
  }
}
