import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
movie: Movie;
  constructor(private route: ActivatedRoute , private moviesService: MoviesService , private location:Location) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.movie=this.moviesService.getMovie(id);
    
  }

}
