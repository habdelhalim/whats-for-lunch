import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Restaurant} from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private database: AngularFireDatabase) {
  }

  getList() {
    return this.database.list('/restaurants').valueChanges();
  }

  add(restaurant: Restaurant) {
    this.database.list('/restaurants').push(restaurant);
  }
}
