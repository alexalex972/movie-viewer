import { Component, Input as RouterInput, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../../../models/movie.models";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { deselectMovie, loadMovieDetails } from "../../../state/movies.actions";
import { selectError, selectLoading, selectSelectedMovie } from "../../../state/movies.selector";
import { Store } from "@ngrx/store";
import { getImageUrl } from "../../utils/movies.utils";
import { MoviesModule } from "../movies.module";

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss'],
    imports: [MoviesModule, MatButtonModule, MatIconModule],
})
export class MovieDetailsComponent implements OnInit {
    @RouterInput() id = '';

    private store = inject(Store);

    public movie$: Observable<Movie | null> = this.store.select(selectSelectedMovie);
    public loading$: Observable<boolean> = this.store.select(selectLoading);
    public error$: Observable<Error | null> = this.store.select(selectError);

    ngOnInit(): void {
        if (this.id) {
            this.store.dispatch(deselectMovie());
            this.store.dispatch(loadMovieDetails({ movieId: this.id }));
        }
    }

    public backdropImage(movie: Movie | null): string {
        if (!movie?.backdrop_path) return '';
        return `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${getImageUrl(movie.backdrop_path)})`;
    }
}
