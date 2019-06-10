import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) {}

    getMovies(page: number, language: string = "en-US") {
        return this.http.get<any>(`${environment.api_base}/movie/popular?&language=${language}&page=${page}`);
    }

    getMovieDetails(id: number) {
        return this.http.get<any>(`${environment.api_base}/movie/${id}`);
    }

    getMovieReviews(id: number) {
        return this.http.get<any>(`${environment.api_base}/movie/${id}/reviews`);
    }
 
    getLanguages() {
        return this.http.get<any>(`${environment.api_base}/configuration/languages`);
    }
 
    getSearchDataFromservice(page: number, language: string, searchtext: string) {
        return this.http.get<any>(`${environment.api_base}/search/movie?query=${searchtext}&language=${language}&page=${page}&include_adult=false`)
    }
 
    getDiscoverMovie(year, sort_by, genere) {
        return this.http.get<any>(`${environment.api_base}/discover/movie?year=${year}&sort_by=${sort_by}&genere=${genere}`);
    }
 
    getGeneres() {
        return this.http.get<any>(`${environment.api_base}/genre/movie/list`);
    }
    getMovieCastCrew(id:number){
        return this.http.get<any>(`${environment.api_base}/movie/${id}/credits`);
    }
    getRecommendation(id:number){
        return this.http.get<any>(`${environment.api_base}/movie/${id}/recommendations`);
    }
    getImages(id:number){
        return this.http.get<any>(`${environment.api_base}/movie/${id}/images`);
    }
    getVideos(id:number){
        return this.http.get<any>(`${environment.api_base}/movie/${id}/videos`);
    }
}

