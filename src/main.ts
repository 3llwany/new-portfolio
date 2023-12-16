import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "app/app.component";
import {AppRoutingModule} from "app/app-routing.module";
import {reducers} from "app/store/store.reducers";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import {WINDOW_PROVIDERS} from "app/shared/services/window.service";
import {provideStore} from "@ngrx/store";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {LottieModule} from "ngx-lottie";

if (environment.production) {
  enableProdMode();
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};


function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

function playerFactory() {
  return import("lottie-web");
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideStore(reducers),
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    WINDOW_PROVIDERS,
    importProvidersFrom(HttpClientModule), // or provideHttpClient() in Angular v15
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })),
    importProvidersFrom(LottieModule.forRoot({player: playerFactory}),)
  ]
});
