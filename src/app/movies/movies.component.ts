import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //movie = new Movie(1, "Avatar", "liles.com");
  
  movies!: Movie[];
  constructor(private movieService: MovieService) { }

  getMovies(): void{
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
  ngOnInit(): void {
      this.getMovies();
  }

  add(name: string, url: string): void {
    name = name.trim();
    url = url.trim();
    if (!name || !url) { return; }
    this.movieService.addMovie({ name, url } as unknown as Movie)
    .subscribe(movie => {
    this.movies.push(movie);
    });
  }
  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }

}
