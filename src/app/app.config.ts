import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter }                from '@angular/router';
import { provideEffects }               from '@ngrx/effects';
import { provideRouterStore }           from '@ngrx/router-store';
import { provideStore }                 from '@ngrx/store';
import { provideStoreDevtools }         from '@ngrx/store-devtools';
import { AppEffects }                   from './app.effects';
import { routes }                       from './app.routes';
import { metaReducers, reducers }       from './reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    }),
    provideEffects([AppEffects]),
    provideRouterStore()
  ]
};
