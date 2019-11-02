import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie/movie';



@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  @Input() movie : Movie;

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '40%',
              height: '100%',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
        {
          small: this.movie.Poster,
          medium: this.movie.Poster,
          big: this.movie.Poster
      },
          {
              small: this.movie.Images[0],
              medium: this.movie.Images[0],
              big: this.movie.Images[0]
          },
          {
            small: this.movie.Images[1],
            medium: this.movie.Images[1],
            big: this.movie.Images[1]
          },
          {
            small: this.movie.Images[2],
            medium: this.movie.Images[2],
            big: this.movie.Images[2]
          },
          {
            small: this.movie.Images[3],
            medium: this.movie.Images[3],
            big: this.movie.Images[3]
          },
          {
            small: this.movie.Images[4],
            medium: this.movie.Images[4],
            big: this.movie.Images[4]
          }
      ];
  }
}


