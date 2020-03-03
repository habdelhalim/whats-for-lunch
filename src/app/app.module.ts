import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {MealSelectorComponent} from './meal-selector/meal-selector.component';
import {MealsListComponent} from './meals-list/meals-list.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './auth.service';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {SelectMealComponent} from './select-meal/select-meal.component';
import {RestaurantEditComponent} from './restaurant-edit/restaurant-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MealSelectorComponent,
    MealsListComponent,
    ToolbarComponent,
    RestaurantsComponent,
    SelectMealComponent,
    RestaurantEditComponent
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
