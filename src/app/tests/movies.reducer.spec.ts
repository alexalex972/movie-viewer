import { moviesReducer } from "../state/movies.reducer";
import { initialMoviesState } from "../state/movies.state";
import * as MoviesActions from '../state/movies.actions';
import { deselectMovie } from "../state/movies.actions";
import { dummyMovies } from "./data.test";

describe('moviesReducer', () => {
    it('should set loading true on loadPopularMovies', () => {
        const state = moviesReducer(initialMoviesState, MoviesActions.loadPopularMovies({ page: 1 }));
        expect(state.loading).toBeTrue();
        expect(state.error).toBeNull();
    });

    it('should populate popularMovies on loadPopularMoviesSuccess', () => {
        const preState = { ...initialMoviesState, loading: true };
        const state = moviesReducer(preState, MoviesActions.loadPopularMoviesSuccess({ movies: dummyMovies }));

        expect(state.loading).toBeFalse();
        expect(state.popularMovies).toEqual(dummyMovies);
    });

    it('should handle loadPopularMoviesFailure', () => {
        const error = new Error('Failed to load');
        const preState = { ...initialMoviesState, loading: true };
        const state = moviesReducer(preState, MoviesActions.loadPopularMoviesFailure({ error }));

        expect(state.loading).toBeFalse();
        expect(state.error).toBe(error);
    });

    it('should set loading true and clear error on loadMovieDetails', () => {
        const state = moviesReducer(initialMoviesState, MoviesActions.loadMovieDetails({ movieId: '1' }));
        expect(state.loading).toBeTrue();
        expect(state.error).toBeNull();
    });

    it('should set selectedMovie and loading false on loadMovieDetailsSuccess', () => {
        const state = moviesReducer(initialMoviesState, MoviesActions.loadMovieDetailsSuccess({ movie: dummyMovies[0] }));
        expect(state.selectedMovie).toEqual(dummyMovies[0]);
        expect(state.loading).toBeFalse();
    });

    it('should set error and loading false on loadMovieDetailsFailure', () => {
        const error = new Error('Failed to load');
        const state = moviesReducer(initialMoviesState, MoviesActions.loadMovieDetailsFailure({ error }));
        expect(state.error).toBe(error);
        expect(state.loading).toBeFalse();
    });

    it('should deselect movie', () => {
        const prevState = { ...initialMoviesState, selectedMovie: dummyMovies[0] };
        const state = moviesReducer(prevState, deselectMovie());
        expect(state.selectedMovie).toBeNull();
    });
});
