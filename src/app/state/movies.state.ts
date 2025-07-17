import { Movie } from '../models/movie.models';

export interface MoviesState {
    popularMovies: Movie[];
    selectedMovie: Movie | null;
    loading: boolean;
    error: Error | null;
}

export const initialMoviesState: MoviesState = {
    popularMovies: [],
    selectedMovie: null,
    loading: false,
    error: null
};
