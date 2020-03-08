import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dbRef: AngularFireList<Order>;

  constructor(database: AngularFireDatabase) {
    this.dbRef = database.list<Order>('cart');
  }

  checkout(orders: Observable<Order[]>) {
    this.dbRef.remove();

    orders.subscribe(
      val => val.forEach(order => {
        this.dbRef.push(order);
      })
    );
  }

  getCart() : Observable<Order[]> {
    return this.dbRef.valueChanges();
  }
}
