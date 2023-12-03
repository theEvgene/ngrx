import { isDevMode }                             from '@angular/core';
import { ActionReducerMap, MetaReducer }         from '@ngrx/store';
import { CountAction, countReducer, CountState } from './count';

export const countNode = 'count';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State, CountAction> = {
  [countNode]: countReducer
};

export const metaReducers: MetaReducer<State, CountAction>[] = isDevMode() ? [] : [];
