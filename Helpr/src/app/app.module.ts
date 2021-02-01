import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { FrontpageModule } from './pages/frontpage/frontpage.module';
import { LoginComponent } from './shared/login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  exports: [TranslateModule],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DashboardModule,
    FrontpageModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot(environment.translateConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
