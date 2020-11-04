import { Component, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/cartelera-response';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Array<IMovie> = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .getMovieService()
      .subscribe((resp) => (this.movies = resp.results));
  }
}
