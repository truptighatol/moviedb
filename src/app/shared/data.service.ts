import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  rev = [];
  private reviews = new BehaviorSubject(this.rev);
  currentReviews = this.reviews.asObservable();

  constructor() { }

  changeReviews(reviews: any) {
    this.reviews.next(reviews)
  }
}
