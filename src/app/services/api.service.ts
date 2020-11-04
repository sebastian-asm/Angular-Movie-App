import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IMovieResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovieService(): Observable<IMovieResponse> {
    return this.http.get<IMovieResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=655a604710ab2753b77cbae3d5fb24ca&language=en-ES&page=1'
    );
  }
}
