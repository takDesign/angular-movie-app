import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public searchMovies<T>(keyword: string): Observable<T> {
    return this.http.get<T>(
      `http://www.omdbapi.com/?apikey=bfdaf441&s=${keyword}`
    );
  }

  public getMovieDetails<T>(id: string): Observable<T> {
    return this.http.get<T>(`http://www.omdbapi.com/?apikey=bfdaf441&i=${id}`);
  }
}
