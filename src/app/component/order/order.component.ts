import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant';
import {OrderService} from '../../service/order.service';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  restaurant: Restaurant = {
    id: null,
    name: 'selected restaurant'
  };
  orders: Observable<Order[]>;
  currentOrder: Order;

  constructor(private service: OrderService) {
  }

  ngOnInit(): void {
    this.orders = this.service.list();
    this.reset();
  }

  add() {
    this.service.add(this.currentOrder);
    this.reset();
  }

  empty() {
    this.service.remove();
  }

  reset() {
    this.currentOrder = {
      restaurant: this.restaurant,
      author: 'me',
      description: '',
      quantity: 1
    };
  }
}
