import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../interfaces/movie-details';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieInfo: MovieDetails | undefined;
  currentRate = 6;

  constructor(private movies: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.movies.getMovieById(id).subscribe((movies: any) => {
      this.movieInfo = movies;
      this.currentRate = this.movieInfo?.vote_average / 2;
    });
  }
}
