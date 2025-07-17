import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    {
        path: 'movies',
        loadComponent: () =>
            import('./components/movies/movies.component').then(m => m.MoviesComponent),
    },
    {
        path: 'movies/:id',
        loadComponent: () =>
            import('./components/movies/movie-details/movie-details.component').then(m => m.MovieDetailsComponent),
    },
];
