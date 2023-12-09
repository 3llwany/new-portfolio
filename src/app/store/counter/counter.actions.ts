import {createAction, props} from "@ngrx/store";

export const INIT = '[CounterComponent] Init';
export const SET = '[CounterComponent] Set';
export const INCREMENT = '[CounterComponent] Increment';
export const DECREMENT = '[CounterComponent] Decrement';
export const RESET = '[CounterComponent] Reset';


export const init = createAction(INIT);
export const set = createAction(SET, props<{ value: number }>());
export const increment = createAction(INCREMENT, props<{ value: number }>());
export const decrement = createAction(DECREMENT, props<{ value: number }>());
export const reset = createAction(RESET);
