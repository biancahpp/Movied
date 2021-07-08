import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../movie-details';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
// import { ApiClientService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieInfo: MovieDetails | undefined;

  constructor(private movies: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.movies.getMovieById(id).subscribe((movies: any) => {
      this.movieInfo = movies;
    });
  }
}
