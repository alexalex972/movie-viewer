import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { Movie } from '../models/movie.models';
import { MovieDetailsComponent } from '../components/movies/movie-details/movie-details.component';
import { deselectMovie, loadMovieDetails } from '../state/movies.actions';
import { selectSelectedMovie } from '../state/movies.selector';
import { ActivatedRoute } from '@angular/router';
import { dummyMovies } from './data.test';

describe('MovieDetailsComponent', () => {
    let component: MovieDetailsComponent;
    let fixture: ComponentFixture<MovieDetailsComponent>;
    let store: MockStore;
    const movie: Movie = dummyMovies[0];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MovieDetailsComponent],
            providers: [provideMockStore(), { provide: ActivatedRoute, useValue: {} }],
        }).compileComponents();

        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
    });

    it('should dispatch deselect and loadMovieDetails on init', () => {
        const dispatchSpy = spyOn(store, 'dispatch');
        component.id = '42';

        component.ngOnInit();

        expect(dispatchSpy).toHaveBeenCalledWith(deselectMovie());
        expect(dispatchSpy).toHaveBeenCalledWith(loadMovieDetails({ movieId: '42' }));
    });

    it('should render movie title when movie is available', () => {
        store.overrideSelector(selectSelectedMovie, movie);
        store.refreshState();
        fixture.detectChanges();

        const titleEl = fixture.debugElement.query(By.css('h1')).nativeElement;
        expect(titleEl.textContent).toContain('Movie 1');
    });
});
