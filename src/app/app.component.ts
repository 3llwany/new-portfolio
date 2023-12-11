import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router, RouterModule, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs/operators';
import {AnimationOptions, LottieModule} from "ngx-lottie";
import {Store} from "@ngrx/store";
import {init} from "app/store/counter/counter.actions";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    LottieModule,
    NgIf,
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loading: boolean = false;

  constructor(private router: Router, // store: Store
  ) {
    // store.dispatch(init())
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
