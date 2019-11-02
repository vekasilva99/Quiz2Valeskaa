import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieDetailsComponent} from '../app/movie-details/movie-details.component';
import {ReservarComponent} from '../app/reservar/reservar.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: MovieDetailsComponent},
  {path: 'reservar/:id', component: ReservarComponent},
  {path: 'orders', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
