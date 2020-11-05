import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { IMovie, IMovieResponse } from '../interfaces/cartelera-response';
import { IMovieDetails } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  private page: number = 1;
  loading: boolean;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '655a604710ab2753b77cbae3d5fb24ca',
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  getMovieService(): Observable<Array<IMovie>> {
    if (this.loading) return of([]); // Se tiene que devolver un observable

    this.loading = true;
    return this.http
      .get<IMovieResponse>(`${this.baseURL}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.page += 1;
          this.loading = false;
        })
      );
  }

  searchMoviesService(query: string): Observable<Array<IMovie>> {
    const params = { ...this.params, page: '1', query };
    return this.http
      .get<IMovieResponse>(`${this.baseURL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getMovieDetailsService(id: string) {
    return this.http.get<IMovieDetails>(`${this.baseURL}/movie/${id}`, {
      params: this.params,
    });
  }

  // Reseteando y volviendo a la primera página de los resultados para el home
  resetPage() {
    this.page = 1;
  }
}
