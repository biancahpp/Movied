import { Movie } from './movie';

export interface AllMovies {
  id: number;
  name: string;
  movies: Movie[];
}
