import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import 'firebase/database';
import {Order} from '../model/order';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dbRef: AngularFireList<Order>;
  private orders: Observable<Order[]>;

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list<Order>('orders');
    this.orders = this.dbRef.snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({id: c.key, ...c.payload.val()})))
      );
  }

  list() {
    return this.orders;
  }

  add(order) {
    return this.dbRef.push(order);
  }

  update(key, order) {
    return this.dbRef.update(key, order);
  }

  remove() {
    this.dbRef.remove();
  }
}
