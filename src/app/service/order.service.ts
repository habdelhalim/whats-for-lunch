import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import 'firebase/database';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dbRef: AngularFireList<Order>;

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list<Order>('orders');
  }

  list() {
    return this.dbRef.valueChanges();
  }

  add(order, restaurant) {
    return this.dbRef.push({description: order, restaurant: restaurant, author: 'me'});
  }

  remove() {
    this.dbRef.remove();
  }
}
