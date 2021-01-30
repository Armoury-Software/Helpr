import { Type } from '@angular/core';

import { DashboardFeaturesComponent } from 'src/app/pages/dashboard/subpages/dashboard-features/dashboard-features.component';
import { DashboardSettingsComponent } from 'src/app/pages/dashboard/subpages/dashboard-settings/dashboard-settings.component';

export interface ComponentDescriptor {
  component: Type<DashboardSubpageComponent>;
  label?: string;
  title?: string;
}

export type DashboardSubpageComponent =
  DashboardSettingsComponent
  | DashboardFeaturesComponent
;
