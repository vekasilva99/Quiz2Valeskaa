import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie/movie';
import { ReservasService } from '../reservas.service';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {

  movie: Movie;
  rForm: FormGroup;
  post: any;
  name: string = '';
  lastName: string = '';
  seats: number;
  id: string = '';
  phoneNumber: string = '';



  ngOnInit() {
    this.getMovie();

  }
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private moviesService: MoviesService, private location: Location, private reservas: ReservasService) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'seats': [null, Validators.required],
      'id': [null, Validators.required],
      'phoneNumber': [null, Validators.required],

    });

  }

  addPost(post) {

    const mov = {
      name : post.name,
      lastName:post.lastName,
      seats:post.seats,
      id:post.id,
      phoneNumber:post.phoneNumber,
      movieId:this.movie.Id
    }

    this.reservas.addReserva(mov);
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.moviesService.getMovie(id);


  }

}



