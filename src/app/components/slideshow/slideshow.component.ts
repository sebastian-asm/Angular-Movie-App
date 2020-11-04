import { Component, Input, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() movies: Array<IMovie> = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
