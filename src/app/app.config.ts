import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';


import { routes } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom([
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        },
        defaultLanguage: 'fr'
      })
    ]),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ],
};
