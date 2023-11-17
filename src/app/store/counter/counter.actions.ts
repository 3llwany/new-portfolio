import {createAction, props} from "@ngrx/store";

export const increment = createAction('[CounterComponent] Increment', props<{ value: number }>());
export const decrement = createAction('[CounterComponent] Decrement', props<{ value: number }>());
export const reset = createAction('[CounterComponent] Reset');
