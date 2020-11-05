import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IMovie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Array<IMovie> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  movieDetails(movie: IMovie) {
    const { id } = movie;
    this.router.navigate(['/movie', id]);
  }
}
