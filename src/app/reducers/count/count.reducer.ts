import { ActionReducer }             from '@ngrx/store/src/models';
import { CountAction, CountActions } from './count.actions';

export interface CountState {
  count: number;
  updatedAt: number;
}

const INITIAL_STATE: CountState = {
  count: 0,
  updatedAt: Date.now()
};

export const countReducer: ActionReducer<CountState, CountAction> = (state = INITIAL_STATE, action: CountAction) => {
    switch (action.type) {
        case CountActions.increase: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case CountActions.decrease: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        case CountActions.clear: {
            return {
                ...state,
                count: 0
            };
        }
        case CountActions.updatedAt: {
            return {
                ...state,
                updatedAt: action.payload.updatedAt
            }
        }
        default: return state
    }
};
