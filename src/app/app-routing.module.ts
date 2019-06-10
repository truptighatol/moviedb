import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from 'src/app/movies/movies.component';
import { DiscoverComponent } from 'src/app/discover/discover.component';
import { PeopleComponent } from 'src/app/people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { DetailComponent } from 'src/app/detail/detail.component';
import { ReviewsComponent } from '../app/reviews/reviews.component'

import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people-details/:id', component: PeopleDetailsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'reviews', component: ReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],

})

export class AppRoutingModule { }
