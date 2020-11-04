import { Component, OnInit, Input } from '@angular/core';

import { IMovie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Array<IMovie> = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
