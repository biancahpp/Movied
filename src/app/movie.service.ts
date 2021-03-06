import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './interfaces/movie';
import { Category } from './interfaces/category';
import { MovieDetails } from './interfaces/movie-details';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<Movie[]> {
    const url = 'http://movied.herokuapp.com/discover';
    return this.http.get<Movie[]>(url);
  }

  getCategoryMovies(categoryId: Number): Observable<Movie[]> {
    const url = `http://movied.herokuapp.com/categories/${categoryId}`;
    return this.http.get<Movie[]>(url);
  }

  getCategories(): Observable<Category[]> {
    const url = `http://movied.herokuapp.com/categories`;
    return this.http.get<Category[]>(url);
  }

  getMovieById(id: number): Observable<MovieDetails> {
    const url = `http://movied.herokuapp.com/movie/${id}`;
    return this.http.get<MovieDetails>(url);
  }
}
