import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantsComponent} from './component/restaurants/restaurants.component';
import {OrderComponent} from './component/order/order.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent},
  {path: '', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
