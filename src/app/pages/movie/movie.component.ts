import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovieDetails } from '../../interfaces/movie-response';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: IMovieDetails;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.api.getMovieDetailsService(id).subscribe((resp) => {
      this.movie = resp;
    });
  }

  // Regresando de manera condicional
  back = () => this.location.back();
}
