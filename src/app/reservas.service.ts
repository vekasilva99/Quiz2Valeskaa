import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { Movie } from './movie/movie';
import { AngularFireList } from '@angular/fire/database';
import { reservar } from './reservar/reservar';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  itemsCollection: AngularFirestoreCollection<reservar>;
  items: Observable<reservar[]>;

  constructor(private db: AngularFirestore) {
    const order=this.db.collection<reservar>('order').valueChanges();
    this.items=order;
   }

  addReserva(movie){
    this.db.collection('order').add(movie);
  }

  getOrders(){
    return this.items;
  }
}
