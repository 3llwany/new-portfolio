import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgxSpinnerModule} from "ngx-spinner";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from "ngx-perfect-scrollbar";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {ContentLayoutComponent} from "./layouts/content/content-layout.component";
import {FullLayoutComponent} from "./layouts/full/full-layout.component";
import {WINDOW_PROVIDERS} from "./shared/services/window.service";
import {ProfileComponent} from './components/profile/profile.component';
import {BannerComponent} from './components/banner/banner.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {CounterComponent} from './components/counter/counter.component';
import {reducers} from "app/store/store.reducers";
// import {AngularFireAuthModule} from "@angular/fire/auth";
// import {AngularFireModule} from "@angular/fire";
import {environment} from "environments/environment";
import {LottieModule} from "ngx-lottie";
import {CounterEffects} from "app/store/counter/counter.effect";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function playerFactory() {
  return import("lottie-web");
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, ProfileComponent, BannerComponent, ProjectsComponent, CounterComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    PerfectScrollbarModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CounterEffects]),
    LottieModule.forRoot({player: playerFactory}),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
  ],
  providers: [
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    WINDOW_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
