import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../interfaces/movie';
import { Category } from '../interfaces/category';
import { AllMovies } from '../interfaces/all-movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  categories: Category[] = [];
  discoverMovies: Movie[] = [];
  AllMovies: AllMovies[] = [];

  constructor(private movies: MovieService) {
    this.movies.getCategories().subscribe((data) => {
      this.categories = data;
      this.categories.forEach((categ) => {
        this.movies.getCategoryMovies(categ.id).subscribe((data) =>
          this.AllMovies.push({
            id: categ.id,
            name: categ.name,
            movies: data,
          })
        );
      });
    });

    this.movies
      .getDiscoverMovies()
      .subscribe((data) => (this.discoverMovies = data));
  }

  ngOnInit(): void {}
}
