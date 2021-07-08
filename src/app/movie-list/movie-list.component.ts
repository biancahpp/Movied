import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Category } from '../category';
import { AllMovies } from '../all-movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
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
      .subscribe((data) => ((this.discoverMovies = data), console.log(data)));
  }

  ngOnInit(): void {}
}
