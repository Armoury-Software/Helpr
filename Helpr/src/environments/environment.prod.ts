import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.i18nPath);
}

export const environment = {
  baseApiPath: 'https://helpr-api.armoury.ro/',
  production: true,
  i18nPath: '/assets/i18n/',
  translateConfig: {
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: false
  }
};
