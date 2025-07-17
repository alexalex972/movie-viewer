import { Component, inject, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { selectError, selectLoading, selectPopularMovies } from "../../state/movies.selector";
import { Store } from "@ngrx/store";
import { loadPopularMovies } from "../../state/movies.actions";
import { getImageUrl } from "../utils/movies.utils";
import { MoviesModule } from "./movies.module";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
    standalone: true,
    imports: [MoviesModule, MatCardModule],
})
export class MoviesComponent implements OnInit {
    private store = inject(Store);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    public movies$ = this.store.select(selectPopularMovies);
    public loading$ = this.store.select(selectLoading);
    public error$ = this.store.select(selectError);

    public getImgUrl = getImageUrl;

    public ngOnInit(): void {
        this.store.dispatch(loadPopularMovies({ page: 1 }));
    }

    public goToMovie(id: number) {
        this.router.navigate([id], { relativeTo: this.route });
    }
}
