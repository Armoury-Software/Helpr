import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-features',
  templateUrl: './dashboard-features.component.html',
  styleUrls: ['./dashboard-features.component.scss']
})
export class DashboardFeaturesComponent {

  public channels: any[] = [
    {
      title: 'general'
    },
    {
      title: 'memes'
    }
  ];

  public overviews: { icon: string, subtitle: string, title: string }[] = [
    {
      title: (1942).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      subtitle: 'test',
      icon: 'menu_jam'
    },
    {
      title: (9284).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      subtitle: 'test',
      icon: 'menu_jam'
    },
    {
      title: (1839).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      subtitle: 'test',
      icon: 'menu_jam'
    }
  ];
}
