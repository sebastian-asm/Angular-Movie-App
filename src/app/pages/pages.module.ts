import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingModule } from 'ng-starrating';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, RatingModule],
})
export class PagesModule {}
