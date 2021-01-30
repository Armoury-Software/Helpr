import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardFeaturesComponent } from './pages/dashboard/subpages/dashboard-features/dashboard-features.component';
import { DashboardSettingsComponent } from './pages/dashboard/subpages/dashboard-settings/dashboard-settings.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'settings',
        component: DashboardComponent,
        data: {
          subpageComponent: DashboardSettingsComponent
        }
      },
      {
        path: 'features',
        component: DashboardComponent,
        data: {
          subpageComponent: DashboardFeaturesComponent
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
