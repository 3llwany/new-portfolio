import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {decrement, increment, reset} from "app/store/counter/counter.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment({value: 70}))
  }


  decrement() {
    this.store.dispatch(decrement({value: 5}))
  }


  reset() {
    this.store.dispatch(reset())
  }
}
