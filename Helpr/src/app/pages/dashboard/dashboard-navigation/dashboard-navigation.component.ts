import { Component, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.scss']
})
export class DashboardNavigationComponent implements OnDestroy {
  public links: { active?: boolean, icon: string, routerLink: string[], title: string }[] = [
    {
      icon: 'cog_jam',
      routerLink: ['/dashboard/settings'],
      title: 'navigation.pages.dashboard.settings'
    },
    {
      icon: 'tools_jam',
      routerLink: ['/dashboard/features'],
      title: 'navigation.pages.dashboard.features'
    }
  ];

  public constructor(
    private readonly router: Router
  ) {

    this.subscription.add(
      this.router.events.pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        map(() => this.router.url)
      ).subscribe((url: string) => {
        this.links = this.links.map((link: { active?: boolean, icon: string, routerLink: string[], title: string }) => {
          return { ...link, active: url.includes(link.routerLink[0]) };
        });

        if (!this.links.find((link: { active?: boolean, icon: string, routerLink: string[], title: string }) => link.active)) {
          this.links[0].active = true;
        }
      })
    );
  }

  private readonly subscription: Subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
