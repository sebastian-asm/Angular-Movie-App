export interface IMovieResponse {
  results: IMovie[];
  page: number;
  total_results: number;
  dates: IDates;
  total_pages: number;
}

export interface IDates {
  maximum: Date;
  minimum: Date;
}

export interface IMovie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}

export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja',
  Ko = 'ko',
  Es = 'Es',
}
