import { AfterViewInit, Component, Input } from '@angular/core';

import Swiper from 'swiper';

import { ICast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slides',
  templateUrl: './cast-slides.component.html',
  styleUrls: ['./cast-slides.component.scss'],
})
export class CastSlidesComponent implements AfterViewInit {
  @Input() cast: Array<ICast> = [];

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
