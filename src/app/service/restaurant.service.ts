import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Restaurant} from '../model/restaurant';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private dbRef: AngularFireList<Restaurant>;
  restaurants: Observable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.dbRef = database.list<Restaurant>('restaurants');
    this.restaurants = this.dbRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({id: c.key, ...c.payload.val()})))
    );
  }

  list() {
    return this.restaurants;
  }

  save(restaurant: Restaurant) {
    if (restaurant.id == null) {
      this.add(restaurant);
    } else {
      this.update(restaurant.id, restaurant);
    }
  }

  add(restaurant: Restaurant) {
    delete restaurant.id;
    this.dbRef.push(restaurant);
  }

  update(key, restaurant) {
    return this.dbRef.update(key, restaurant);
  }

  remove(key) {
    return this.dbRef.remove(key);
  }

  clear() {
    return this.dbRef.remove();
  }
}
