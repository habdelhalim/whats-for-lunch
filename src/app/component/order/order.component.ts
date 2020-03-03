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

  constructor(private service: OrderService) {
    this.orders = service.list();
  }

  ngOnInit(): void {
  }

  add(meal: string) {
    this.service.add(meal, this.restaurant);
  }

  empty() {
    this.service.remove();
  }
}
