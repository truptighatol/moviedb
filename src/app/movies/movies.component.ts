import { Component, OnInit } from '@angular/core';
import {MovieService } from 'src/app/core/movie.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private movies=[];
  public model:any;
  page =1;
  pageSize=20;
  collectionSize;
  private languages=[];
  language:string="en-US";

  constructor(private moviesService : MovieService){}

  ngOnInit(){
    this.mainfunction();
    this.moviesService.getLanguages().subscribe(
      data=>{
        this.languages = data;
        console.log(data);
      },
      error=>{console.error();}
    );
  }

  mainfunction(){
    this.moviesService.getMovies(this.page,this.language).subscribe(
      data=>{
        this.movies = data.results;
        this.collectionSize = data.total_results;
        this.page= data.page;
        console.log(data.results);
      },
      error=>{console.error();}
    );
  }

  setPage(pg){
    this.page=pg
    this.mainfunction();
  }

  getMovieByLang(selectedlang) {
    this.language=selectedlang;
    this.mainfunction();
  }
}
