import { Component, OnInit } from '@angular/core';
import {MovieService } from 'src/app/core/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private movies=[];
  language:string="en-US";
  page =1;
  pageSize=20;
  collectionSize;
  srtext;
  constructor(private moviesService : MovieService) { }

  ngOnInit() {
  }
  getSearchData(searchtext) {
    this.srtext = encodeURI(searchtext);
    this.moviesService.getSearchDataFromservice(this.page,this.language, this.srtext).subscribe(
      data=>{
        this.movies = data.results;
        console.log(data.results);
      },
      error=>{console.error();}
    );
   
  }
}
