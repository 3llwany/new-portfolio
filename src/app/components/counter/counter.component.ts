import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {decrement, increment, reset} from "app/store/counter/counter.actions";
import {Store} from "@ngrx/store";
// import {AngularFireAuth} from "@angular/fire/auth";
// import {AngularFirestore} from "@angular/fire/firestore";
import {selectCounter} from "app/store/counter/counter.selector";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ counter: number }>,
              // private fireAuth: AngularFireAuth,
              // private firestore: AngularFirestore
  ) {
    this.count$ = store.select(selectCounter);
  }

  plus = 2
  minus = 3

  ngOnInit(): void {
    // this.fireAuth.signInWithEmailAndPassword('sayedelwany03@gmail.com', '123456').then(res => {
    //   console.log(res)
    // })
  }

  increment() {
    this.store.dispatch(increment({value: this.plus}))
  }


  decrement() {
    this.store.dispatch(decrement({value: this.minus}))
  }


  reset() {
    this.store.dispatch(reset())
  }
}
