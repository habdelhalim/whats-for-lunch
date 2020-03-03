import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantsComponent} from './component/restaurants/restaurants.component';
import {SelectMealComponent} from './component/select-meal/select-meal.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent},
  {path: '', component: SelectMealComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
