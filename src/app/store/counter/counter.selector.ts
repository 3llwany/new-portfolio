import {createSelector} from "@ngrx/store";

export const selectCounter = (state: { counter: number }) => state.counter;
export const selectCounterDouble = createSelector(selectCounter, (state) => state * 2);
