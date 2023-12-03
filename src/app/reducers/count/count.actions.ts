import { Action } from '@ngrx/store';

export enum CountActions {
    increase = '[COUNT] increase',
    decrease = '[COUNT] decrease',
    clear = '[COUNT] clear',
    updatedAt = '[COUNT] updated at',
}

export class CountIncreaseAction implements Action {
    readonly type = CountActions.increase;
}

export class CountDecreaseAction implements Action {
    readonly type = CountActions.decrease;
}

export class CountClearAction implements Action {
    readonly type = CountActions.clear;
}
export class CountUpdatedAtAction implements Action {
    readonly type = CountActions.updatedAt;
    constructor(public payload: { updatedAt: number }) {};
}

export type CountAction = CountIncreaseAction | CountDecreaseAction | CountClearAction | CountUpdatedAtAction;
