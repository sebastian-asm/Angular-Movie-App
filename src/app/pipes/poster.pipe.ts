import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string): string {
    // En caso que la imagen de la película venga como null
    // Se mostrar una imagen por defecto
    if (poster) {
      return `https://image.tmdb.org/t/p/w500${poster}`;
    } else {
      return './assets/no-image.jpg';
    }
  }
}
