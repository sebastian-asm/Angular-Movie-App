import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/cartelera-response';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Array<IMovie> = [];
  moviesSlideshow: Array<IMovie> = [];

  // Para estar escuchando eventos
  @HostListener('window:scroll')
  onScroll() {
    const position = document.documentElement.scrollTop + 1300;
    const max = document.documentElement.scrollHeight;

    if (position > max) {
      if (this.api.loading) return;

      // Llamar al servicio para obtener más películas
      this.api.getMovieService().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMovieService().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy() {
    this.api.resetPage();
  }
}
