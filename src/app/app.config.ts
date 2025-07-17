import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbApiInterceptor } from './interceptors/tmdb.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { moviesReducer } from './state/movies.reducer';
import { MoviesEffects } from './state/movies.effects';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(routerOptions)),
    provideHttpClient(withInterceptors([tmdbApiInterceptor])),
    provideStore({
      movies: moviesReducer,
    }),
    provideEffects(MoviesEffects),
  ],
};
