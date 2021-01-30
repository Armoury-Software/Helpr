import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from '../app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { UIModule } from './ui.module';



@NgModule({
  declarations: [
    NavigationComponent,
    PreloaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    TranslateModule.forChild(environment.translateConfig),
    UIModule,
  ],
  exports: [
    NavigationComponent,
    PreloaderComponent,
    TranslateModule,
    UIModule
  ]
})
export class SharedModule { }
