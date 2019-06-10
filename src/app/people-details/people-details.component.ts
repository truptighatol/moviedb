import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../core/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  private id:number;
  private peopleDetails;
  movieCredits;

  constructor(private route:ActivatedRoute, private peopleServ:PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe(
      data=>{
        this.id = data['id'];
      }
    )
  
    this.peopleServ.getPeopleDetails(this.id).subscribe(
        data=>{
          console.log(data);
          this.peopleDetails = data;
        },
        error =>{
          console.log(error);
        }
    )
    this.peopleServ.getMovieCredits(this.id).subscribe(
        data=>{
          console.log(data);
          this.movieCredits=data.cast;
          console.log(this.movieCredits);
        }
    )
  }   
  
}
