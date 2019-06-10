import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailComponent } from './detail/detail.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { DiscoverComponent } from './discover/discover.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieService } from './core/movie.service';
import { PeopleService } from './core/people.service';
import { InterceptorService } from './core/interceptor.service';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselDirective } from './carousel.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSkeletonLoaderModule }from 'ngx-skeleton-loader';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { from } from 'rxjs';
import { MinstohrsPipe } from './shared/minstohrs.pipe';
import { DataService } from './shared/data.service';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    PeopleComponent,
    DiscoverComponent,
    DetailComponent,
    HeaderComponent,
    PeopleDetailsComponent,
    CarouselDirective,
    MinstohrsPipe,
    ReviewsComponent 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgxSkeletonLoaderModule,
    NgCircleProgressModule.forRoot({
      // backgroundColor: "#353535",
      // backgroundPadding: 0,
      // radius: 25,
      // unitsColor: "#ffffff",
      // outerStrokeWidth: 5,
      // outerStrokeColor: "#65d378",
      // innerStrokeColor: "#d4e2d6",
      // innerStrokeWidth: 2,
      // titleColor: "#ffffff",
      // imageHeight: 153,
      // showSubtitle: false,
      // startFromZero: false,
      // animationDuration: 300,
      // animation:true
    })
  ],
  providers: [
    MovieService,
    DataService,
    PeopleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
