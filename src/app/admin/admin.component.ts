import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../reservas.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {reservar} from '../reservar/reservar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
reservas: reservar[];
  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
   this.reservasService.getOrders().subscribe( items =>{
     this.reservas= items;
     console.log(items);
  })

}
}
