import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movies.actions';
import { initialMoviesState } from './movies.state';

export const moviesReducer = createReducer(
    initialMoviesState,

    on(MovieActions.loadPopularMovies, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MovieActions.loadPopularMoviesSuccess, (state, { movies }) => ({
        ...state,
        loading: false,
        popularMovies: movies
    })),
    on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(MovieActions.loadMovieDetails, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MovieActions.loadMovieDetailsSuccess, (state, { movie }) => ({
        ...state,
        loading: false,
        selectedMovie: movie
    })),
    on(MovieActions.loadMovieDetailsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(MovieActions.deselectMovie, (state) => ({
        ...state,
        selectedMovie: null,
    }))
);
