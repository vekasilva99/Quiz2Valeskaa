import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private db: AngularFirestore) { }

  addReserva(movie){
    this.db.collection('order').add(movie);
  }
}
