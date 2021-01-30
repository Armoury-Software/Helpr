import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public links: { routerLink: string[], title: string, }[] = [
    {
      title: 'navigation.pages.frontpage.dashboard',
      routerLink: ['/dashboard']
    },
    {
      title: 'navigation.pages.frontpage.features',
      routerLink: ['/dashboard']
    },
    {
      title: 'navigation.pages.frontpage.contribute',
      routerLink: ['/dashboard']
    },
    {
      title: 'navigation.pages.frontpage.about',
      routerLink: ['/dashboard']
    },
    {
      title: 'navigation.pages.frontpage.support',
      routerLink: ['/dashboard']
    }
  ];
}
