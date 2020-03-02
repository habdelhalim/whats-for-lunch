import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private database: AngularFireDatabase) {
  }

  getList() {
    return this.database.list('/restaurants').valueChanges();
  }
}
