import {createReducer, on} from "@ngrx/store";
import {decrement, increment, reset, set} from "app/store/counter/counter.actions";

export const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value),
  on(reset, (state) => 0),
);
