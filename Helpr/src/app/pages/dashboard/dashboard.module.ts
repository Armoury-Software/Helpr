import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { DashboardTopBarComponent } from './dashboard-top-bar/dashboard-top-bar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardSettingsComponent } from './subpages/dashboard-settings/dashboard-settings.component';
import { DashboardFeaturesComponent } from './subpages/dashboard-features/dashboard-features.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavigationComponent,
    DashboardTopBarComponent,
    DashboardSettingsComponent,
    DashboardFeaturesComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
