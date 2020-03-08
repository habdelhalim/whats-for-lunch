import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './service/auth.service';
import {ToolbarComponent} from './component//toolbar/toolbar.component';
import {RestaurantsComponent} from './component//restaurants/restaurants.component';
import {RestaurantEditComponent} from './component/restaurant-edit/restaurant-edit.component';
import {FormsModule} from '@angular/forms';
import {OrderComponent} from './component/order/order.component';
import { TodaySelectionComponent } from './component/today-selection/today-selection.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RestaurantsComponent,
    RestaurantEditComponent,
    OrderComponent,
    TodaySelectionComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
