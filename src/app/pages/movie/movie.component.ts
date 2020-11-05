import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICast } from '../../interfaces/credits-response';
import { IMovieDetails } from '../../interfaces/movie-response';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: IMovieDetails;
  cats: Array<ICast> = [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.api.getMovieDetailsService(id).subscribe((movie) => {
      // Cuando el id es inválido se redirecciona al home
      if (!movie) return this.router.navigateByUrl('/home');
      this.movie = movie;
    });

    this.api.getCreditsService(id).subscribe((cast) => {
      // Filtrar para mostrar solo actores con fotos de perfiles
      this.cats = cast.filter((actor) => actor.profile_path !== null);
    });
  }

  // Regresando de manera condicional
  back = () => this.location.back();
}
