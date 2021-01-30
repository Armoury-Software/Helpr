import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontpageComponent } from './frontpage.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FrontpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FrontpageComponent
  ]
})
export class FrontpageModule { }
