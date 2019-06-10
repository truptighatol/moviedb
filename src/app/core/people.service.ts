import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeoples(page: number = 1) {
    return this.http.get<any>(`${environment.api_base}/person/popular?page=${page}`);
  }
  getPeopleDetails(id: number) {
    return this.http.get<any>(`${environment.api_base}/person/${id}`);
  }
  getMovieCredits(id: number) {
    return this.http.get<any>(`${environment.api_base}/person/${id}/movie_credits`)
  }
}
