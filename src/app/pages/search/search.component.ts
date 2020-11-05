import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/cartelera-response';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  movies: Array<IMovie> = [];
  textSearch: string;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // Llamar al servicio
      const { text } = params;
      this.textSearch = text;
      this.loading = true;
      this.api.searchMoviesService(text).subscribe((resp) => {
        this.movies = resp;
        this.loading = false;
      });
    });
  }
}
