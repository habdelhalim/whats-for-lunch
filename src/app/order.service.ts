import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private collection: AngularFireList<unknown>;

  constructor(database: AngularFireDatabase) {
    this.collection = database.list('items');
  }

  getItems() {
    return this.collection.valueChanges();
  }

  addItem(item) {
    return this.collection.push({name: item});
  }
}
