import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from './movie';
import { Category } from './category';
import { MovieDetails } from './movie-details';

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
