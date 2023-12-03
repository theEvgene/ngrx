import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject }   from '@angular/core';
import { RouterOutlet }        from '@angular/router';
import { select, Store }       from '@ngrx/store';
import { map }                 from 'rxjs';
import {
  CountClearAction,
  CountDecreaseAction,
  CountIncreaseAction,
  countSelector,
  CountState,
  updatedAtSelector
}                              from './reducers/count';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, AsyncPipe],
  template: `
    <button (click)="increase()">Increase</button>
    <button [disabled]="hasOnlyIncrease$ | async" (click)="decrease()">Decrease</button>
    <button [disabled]="hasOnlyIncrease$ | async" (click)="clear()">Clear</button>

    <div>
      <p>Count is: {{count$ | async}}</p>
      <p>Updated at: {{updatedAt$ | async | date : 'yyyy-MM-dd HH:mm:ss'}}</p>
    </div>

    <router-outlet></router-outlet>`
})
export class AppComponent {

  private readonly store$ = inject(Store<CountState>);

  protected readonly count$ = this.store$.pipe(select(countSelector));
  protected readonly hasOnlyIncrease$ = this.count$.pipe(map(c => c <= 0));
  protected readonly updatedAt$ = this.store$.pipe(select(updatedAtSelector));

  protected increase = () => {
    this.store$.dispatch(new CountIncreaseAction());
  };

  protected decrease = () => {
    this.store$.dispatch(new CountDecreaseAction());
  };

  protected clear = () => {
    this.store$.dispatch(new CountClearAction());
  };

}
