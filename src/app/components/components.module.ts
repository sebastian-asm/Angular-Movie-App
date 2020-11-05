import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlidesComponent } from './cast-slides/cast-slides.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlidesComponent,
  ],
  imports: [CommonModule, RatingModule, RouterModule, PipesModule],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlidesComponent,
  ],
})
export class ComponentsModule {}
