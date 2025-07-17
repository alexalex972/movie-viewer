import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './movies.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MovieFacade } from '../services/facades/movie.facade';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private movieFacade = inject(MovieFacade);

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      // delay(1000),
      mergeMap(({ page }) =>
        this.movieFacade.getPopularMovies(page || 1).pipe(
          map(response =>
            MovieActions.loadPopularMoviesSuccess({ movies: response.results })
          ),
          catchError(error =>
            of(MovieActions.loadPopularMoviesFailure({ error }))
          )
        )
      )
    )
  );

  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovieDetails),
      // delay(1000),
      mergeMap(({ movieId }) =>
        this.movieFacade.getMovieDetails(movieId).pipe(
          map(movie =>
            MovieActions.loadMovieDetailsSuccess({ movie })
          ),
          catchError(error =>
            of(MovieActions.loadMovieDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
