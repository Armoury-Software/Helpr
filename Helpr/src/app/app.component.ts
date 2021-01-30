import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CUSTOM_ICONS } from 'src/assets/icons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly translateService: TranslateService
  ) {
    this.translateService.addLangs(['en', 'ro']);
    this.translateService.setDefaultLang('en');

    const browserLang: string = translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|ro/) ? browserLang : 'en');

    CUSTOM_ICONS.forEach((icon: string) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/' + icon + '.svg')
      );
    });
  }
}
