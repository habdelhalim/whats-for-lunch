import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {MealSelectorComponent} from './component/meal-selector/meal-selector.component';
import {MealsListComponent} from './component//meals-list/meals-list.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './service/auth.service';
import {ToolbarComponent} from './component//toolbar/toolbar.component';
import {RestaurantsComponent} from './component//restaurants/restaurants.component';
import {SelectMealComponent} from './component//select-meal/select-meal.component';
import {RestaurantEditComponent} from './component/restaurant-edit/restaurant-edit.component';
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
