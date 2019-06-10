import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/movie.service';

@Component({
  selector: 'app-about',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  private discoverMovies=[];
  public genres=[];

  years=["Nope",2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006];
  
  sorts = [ { name:"Popularity Ascending", key :"popularity.asc"}, 
            { name: "Popularity Descending", key:"popularity.desc"},
            { name:"Release Date Ascend.", key:"release_date.asc"},
            { name:"Release Date Descend.", key:"release_date.desc"},
            { name :"Original Title Ascend.",key:"original_title.asc"},
            { name:"Oeiginal Title Descend.", key:"original_title.desc"}
          ];
   selectYear;
   selectSortBy;
   selectGenere;

   constructor(private dmoviesService : MovieService){}

  ngOnInit() {
    this.discoverFunction();
    this.dmoviesService.getGeneres().subscribe(
      data=>{
        this.genres = data.genres;
        console.log(data);
      },
      error=>{console.error();}
    );
  }

  getYear(value){
    this.selectYear=value;
    this.discoverFunction();
  } 
  getSortData(sortBy){
    this.selectSortBy=sortBy;
    this.discoverFunction();
  }
  getGenere(genere){
    this.selectGenere =genere;
    this.discoverFunction();
  }

  discoverFunction(){
      this.dmoviesService.getDiscoverMovie(this.selectYear,this.selectSortBy,this.selectGenere).subscribe(
        data=>{
          this.discoverMovies = data.results;
          console.log(data.results);
        },
        error=>{console.error();}
      );
  }
}
