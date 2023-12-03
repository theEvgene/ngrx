import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countNode }                             from '../index';
import { CountState }                            from './count.reducer';

const countFeatureSelector = createFeatureSelector<CountState>(countNode);

export const countSelector = createSelector(
  countFeatureSelector,
  (state: CountState) => state.count
);

export const updatedAtSelector = createSelector(
    countFeatureSelector,
    (state: CountState) => state.updatedAt
);
