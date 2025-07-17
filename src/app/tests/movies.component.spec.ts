import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from '../components/movies/movies.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { loadPopularMovies } from '../state/movies.actions';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { selectPopularMovies } from '../state/movies.selector';

describe('MoviesComponent', () => {
    let component: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;
    let store: MockStore;
    let routerSpy: jasmine.SpyObj<Router>;

    const initialState = {
        movies: {
            loading: false,
            popularMovies: [],
            error: null
        }
    };

    beforeEach(async () => {
        routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        await TestBed.configureTestingModule({
            imports: [MoviesComponent],
            providers: [
                provideMockStore({ initialState }),
                { provide: Router, useValue: routerSpy },
                { provide: ActivatedRoute, useValue: {} },
            ],
        }).compileComponents();

        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(MoviesComponent);
        component = fixture.componentInstance;
    });

    it('should dispatch loadPopularMovies on init', () => {
        const dispatchSpy = spyOn(store, 'dispatch');
        fixture.detectChanges();
        expect(dispatchSpy).toHaveBeenCalledWith(loadPopularMovies({ page: 1 }));
    });

    it('should render movie cards from observable', () => {
        const movies = [{
            id: 1, title: 'Movie 1', overview: 'Overview 1', poster_path: '/path1.jpg', release_date: '2025-07-17',
            vote_average: 8.5, backdrop_path: '/backdrop1.jpg', tagline: 'Tagline 1', genres: [{ id: 1, name: 'Action' }]
        },
        {
            id: 2, title: 'Movie 2', overview: 'Overview 2', poster_path: '/path2.jpg', release_date: '2025-07-18',
            vote_average: 8.6, backdrop_path: '/backdrop2.jpg', tagline: 'Tagline 2', genres: [{ id: 2, name: 'Drama' }]
        }
        ]

        store.overrideSelector(selectPopularMovies, movies);
        store.refreshState();
        fixture.detectChanges();

        const cards = fixture.debugElement.queryAll(By.css('mat-card'));
        expect(cards.length).toBe(2);
        expect(cards[0].nativeElement.textContent).toContain('Movie 1');
        expect(cards[1].nativeElement.textContent).toContain('Movie 2');
    });

    it('should navigate to movie details on goToMovie()', () => {
        component.goToMovie(1);
        expect(routerSpy.navigate).toHaveBeenCalledWith([1], { relativeTo: jasmine.anything() });
    });
});
