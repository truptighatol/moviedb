import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/movie.service';
import { from } from 'rxjs';
import { DataService } from '../shared/data.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private movieDetail;
  private bannerImage;
  private id: number;
  private movieReview = [];
  private castName = [];
  private crewName = [];
  private recommendation = [];
  private backdrops = [];
  private posters = [];
  private videos = [];

  constructor(private route: ActivatedRoute, private movieServ: MovieService, private data : DataService) { }

  ngOnInit() {
    console.log("ngOnInt");
    this.route.params.subscribe(
      parameter => {
        this.id = parameter['id'];
        this.movieServ.getMovieDetails(this.id).subscribe(
          data => {
            this.movieDetail = data;
            this.bannerImage ="https://image.tmdb.org/t/p/w1400_and_h450_face"+ data.backdrop_path;
            console.log(this.movieDetail);
          },
          error => {
            console.log(error);
          }
        )
        this.movieServ.getMovieReviews(this.id).subscribe(
          data => {
            this.setReviews(data.results);
            this.movieReview = data.results.slice(0,1);
            console.log(this.movieReview);
          },
          error => {
            console.log(error);
          }
        )
        this.movieServ.getMovieCastCrew(this.id).subscribe(
          data => {
            console.log(data);
            this.castName = data.cast.slice(0, 6);
            this.crewName = data.crew.slice(0, 3);
          },
          error => {
            console.log(error);
          }
        )
        this.movieServ.getRecommendation(this.id).subscribe(
          data => {
            this.recommendation = data.results;
            console.log(data.results);
          },
          error => {
            console.log(error);
          }
        )
      }
    )
  }

  slideConfig = {
    "infinite": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "arrows": true,
  };

  setReviews(reviews){
    this.data.changeReviews(reviews);
  }

  getMediaByPosters(tabName) {
    console.log(tabName);
    console.log(this.id);

    if (tabName == 'poster' || tabName == 'backdrop') {
      // call service to get poster
      this.movieServ.getImages(this.id).subscribe(
        data => {
          console.log(data);
          this.backdrops = data.backdrops.slice(0,10);
          this.posters = data.posters.slice(0,10);
        },
        error => {
          console.log(error);
        }
      )
    }
    else if (tabName == 'video') {
      // calll service to get video
      this.movieServ.getVideos(this.id).subscribe(
        data =>{
          console.log(data);
          this.videos = data.results.slice(0,6);
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
