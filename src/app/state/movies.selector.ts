import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.state';

export const selectMovieState = createFeatureSelector<MoviesState>('movies');

export const selectPopularMovies = createSelector(
    selectMovieState,
    (state) => state.popularMovies
);

export const selectSelectedMovie = createSelector(
    selectMovieState,
    (state) => state.selectedMovie
);

export const selectLoading = createSelector(
    selectMovieState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectMovieState,
    (state) => state.error
);
