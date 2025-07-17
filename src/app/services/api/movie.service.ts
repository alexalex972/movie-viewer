import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieResponse, Movie } from '../../models/movie.models';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private readonly API_BASE_URL = environment.tmdbApiUrl;

    constructor(private http: HttpClient) { }

    getPopularMovies(page: number, language: string): Observable<MovieResponse> {
        return this.http.get<MovieResponse>(
            `${this.API_BASE_URL}/movie/popular`,
            {
                params: {
                    language,
                    page: page.toString()
                }
            }
        );
    }

    getMovieDetails(
        movieId: string,
        language: string,
    ): Observable<Movie> {
        return this.http.get<Movie>(
            `${this.API_BASE_URL}/movie/${movieId}`,
            {
                params: {
                    language,
                }
            }
        );
    }
}