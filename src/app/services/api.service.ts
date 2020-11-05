import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { IMovie, IMovieResponse } from '../interfaces/cartelera-response';
import { IMovieDetails } from '../interfaces/movie-response';
import { ICast, ICreditsResponse } from '../interfaces/credits-response';

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
    return this.http
      .get<IMovieDetails>(`${this.baseURL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(
        // En caso de poner un id en la url que no exista, se maneja el error
        // Se devuelve un observable con valor null
        catchError(() => of(null))
      );
  }

  // Reseteando y volviendo a la primera página de los resultados para el home
  resetPage = () => (this.page = 1);

  getCreditsService(id: string): Observable<Array<ICast>> {
    return this.http
      .get<ICreditsResponse>(`${this.baseURL}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError(() => of([]))
      );
  }
}
