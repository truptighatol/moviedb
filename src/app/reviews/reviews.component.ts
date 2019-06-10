import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.reviews = this.data.currentReviews.subscribe(data => {
      this.reviews = data;

      console.log("Reviews");
      console.log(this.reviews);
    });
  }

}
