import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbApiInterceptor } from './interceptors/tmdb.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { moviesReducer } from './state/movies.reducer';
import { MoviesEffects } from './state/movies.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([tmdbApiInterceptor])),
    provideStore({
      movies: moviesReducer,
    }),
    provideEffects(MoviesEffects),
  ],
};
