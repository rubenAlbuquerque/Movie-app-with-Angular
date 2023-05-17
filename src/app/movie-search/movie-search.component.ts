import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movies/movie.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  orderByProperty(arr: any[], prop: string, startWith: string): any[] {
    return arr.sort((a, b) => {
      if (a[prop].startsWith(startWith) && !b[prop].startsWith(startWith)) {
        return -1;
      } else if (
        !a[prop].startsWith(startWith) &&
        b[prop].startsWith(startWith)
      ) {
        return 1;
      } else {
        return a[prop].localeCompare(b[prop]);
      }
    });
  }
  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering theterm
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the termchanges
      switchMap((term: string) => this.movieService.searchMovies(term)),
      // return the first 10 movies
      map((movies: Movie[]) =>
        this.orderByProperty(movies.slice(0, 10), 'name', 'ter')
      )
    );
  }
}
