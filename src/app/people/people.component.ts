import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people=[];
  page =1;
  collectionSize:number;
  pageSize=20;

  constructor(private peopleService :PeopleService ) { }

  ngOnInit() {
    this.getPeoplePage(this.page);
  }
  getPeoplePage(page:number){
    this.peopleService.getPeoples(page).subscribe(
      data=>{
        this.people= data.results;
        console.log(data.results);
        this.collectionSize= data.total_results;
        this.page = data.page;
      },
      error=>{console.error();}
    )
  }
} 
