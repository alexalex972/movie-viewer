import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse, Movie } from '../../models/movie.models';
import { MovieService } from '../api/movie.service';

@Injectable({
    providedIn: 'root',
})
export class MovieFacade {
    constructor(private movieService: MovieService) { }

    getPopularMovies(page: number = 1, language = 'en-US'): Observable<MovieResponse> {
        return this.movieService.getPopularMovies(page, language);
    }

    getMovieDetails(movieId: string, language = 'en-US'): Observable<Movie> {
        return this.movieService.getMovieDetails(movieId, language);
    }
}
