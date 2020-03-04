import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantsComponent} from './component/restaurants/restaurants.component';
import {OrderComponent} from './component/order/order.component';
import {TodaySelectionComponent} from './component/today-selection/today-selection.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'today-selection', component: TodaySelectionComponent},
  {path: '', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
