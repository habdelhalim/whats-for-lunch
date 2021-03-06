import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantsComponent} from './component/restaurants/restaurants.component';
import {OrderComponent} from './component/order/order.component';
import {TodaySelectionComponent} from './component/today-selection/today-selection.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  {path: 'order-now', component: OrderComponent},
  {path: 'restaurants', component: RestaurantsComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'today-selection', component: TodaySelectionComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'today-cart', component: CartComponent, canActivate: [AngularFireAuthGuard]},
  {path: '', redirectTo: 'order-now', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
