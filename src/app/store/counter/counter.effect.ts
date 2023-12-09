import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, init, reset, set} from "app/store/counter/counter.actions";
import {selectCounter} from "app/store/counter/counter.selector";

@Injectable()
export class CounterEffects {
  loadCounter = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const stored = localStorage.getItem('counter');
        if (stored) {
          return of(set({value: +stored}))
        }
        return of(set({value: 0}))
      })
    )
  )

  saveCounter = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement, reset),
    withLatestFrom(this.store.select(selectCounter)),
    tap(([action, counter]) => {
      console.log(counter)
      localStorage.setItem('counter', counter.toString())
    })
  ), {dispatch: false});

  constructor(private actions$: Actions, private store: Store<{ counter: number }>) {
  }
}
