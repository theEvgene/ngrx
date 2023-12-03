import { inject, Injectable }                 from '@angular/core';
import { Actions, createEffect, ofType }      from '@ngrx/effects';
import { map }                                from 'rxjs';
import { CountActions, CountUpdatedAtAction } from './reducers/count';

@Injectable()
export class AppEffects {

    private readonly actions$ = inject(Actions);

    updatedAt$ = createEffect(() => this.actions$.pipe(
        ofType(CountActions.increase, CountActions.decrease, CountActions.clear),
        map(() => new CountUpdatedAtAction({updatedAt: Date.now()}))
    ))

}
