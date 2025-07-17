import { moviesReducer } from "../state/movies.reducer";
import { initialMoviesState } from "../state/movies.state";
import * as MoviesActions from '../state/movies.actions';

describe('moviesReducer', () => {
    it('should set loading true on loadPopularMovies', () => {
        const state = moviesReducer(initialMoviesState, MoviesActions.loadPopularMovies({ page: 1 }));
        expect(state.loading).toBeTrue();
        expect(state.error).toBeNull();
    });

    it('should populate popularMovies on loadPopularMoviesSuccess', () => {
        const dummyMovies = [{
            id: 1, title: 'Movie 1', overview: 'Overview 1', poster_path: '/path1.jpg', release_date: '2025-07-17',
            vote_average: 8.5, backdrop_path: '/backdrop1.jpg', tagline: 'Tagline 1', genres: [{ id: 1, name: 'Action' }]
        }];
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
});
