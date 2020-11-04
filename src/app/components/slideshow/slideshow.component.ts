import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import Swiper from 'swiper';

import { IMovie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Array<IMovie> = [];

  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  // AfterViewInit: Se llama una única vez, tras inicializar las vistas y sub-vistas del componente.
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  slideNext() {
    this.mySwiper.slideNext();
  }

  slidePrev() {
    this.mySwiper.slidePrev();
  }
}
