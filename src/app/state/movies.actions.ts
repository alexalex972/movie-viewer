import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.models';

export const loadPopularMovies = createAction(
  '[Movies] Load Popular Movies',
  props<{ page?: number }>()
);

export const loadPopularMoviesSuccess = createAction(
  '[Movies] Load Popular Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadPopularMoviesFailure = createAction(
  '[Movies] Load Popular Movies Failure',
  props<{ error: Error }>()
);

export const loadMovieDetails = createAction(
  '[Movies] Load Movie Details',
  props<{ movieId: string }>()
);

export const loadMovieDetailsSuccess = createAction(
  '[Movies] Load Movie Details Success',
  props<{ movie: Movie }>()
);

export const loadMovieDetailsFailure = createAction(
  '[Movies] Load Movie Details Failure',
  props<{ error: Error }>()
);

export const deselectMovie = createAction(
  '[Movies] Deselect Movie'
);
