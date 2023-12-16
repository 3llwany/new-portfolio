import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Store, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AnimationOptions, LottieModule} from "ngx-lottie";
import {init} from "app/store/counter/counter.actions";
import {CounterEffects} from "app/store/counter/counter.effect";


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    NgIf,
    RouterModule,
    EffectsModule,
    StoreModule,
    LottieModule,
  ],
  providers: [CounterEffects],
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loading: boolean = true;

  constructor(private router: Router, store: Store
  ) {
    store.dispatch(init())
  }


  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 0));

    setTimeout(() => {
      this.loading = false;

    }, 4000);
  }

  options: AnimationOptions = {
    path: 'assets/images/welcome.json',
  };

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
