import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Restaurant} from '../model/restaurant';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodaySelectionService {
  private dbRef: AngularFireList<Restaurant>;
  selection: Observable<Restaurant[]>;

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list<Restaurant>('todaySelection');
    this.selection = this.dbRef.snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({id: c.key, ...c.payload.val()})))
      );
  }

  getRestaurant() {
    return this.selection;
  }

  setRestaurant(restaurant: Restaurant) {
    this.dbRef.set('today', restaurant);
  }
}
