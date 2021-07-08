import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  discoverMovies: Movie[] = [];
  actionMovies: Movie[] = [];

  constructor(private movies: MovieService) {
    this.movies
      .getDiscoverMovies()
      .subscribe((data) => ((this.discoverMovies = data), console.log(data)));

    //action
    this.movies
      .getCategoryMovies(28)
      .subscribe((data) => ((this.discoverMovies = data), console.log(data)));
  }

  ngOnInit(): void {}
}
