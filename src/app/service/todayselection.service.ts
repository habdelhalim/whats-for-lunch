import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Restaurant} from '../model/restaurant';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodaySelectionService {
  private dbRef: AngularFireList<Restaurant>;
  private restaurant: Restaurant[];

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list<Restaurant>('todaySelection');
    this.dbRef.snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({id: c.key, ...c.payload.val()})))
      )
      .subscribe(rest => this.restaurant = rest);
  }

  getRestaurant() {
    return this.restaurant ? this.restaurant[0] : null;
  }

  setRestaurant(restaurant: Restaurant) {
    this.dbRef.set('today', restaurant);
  }
}
