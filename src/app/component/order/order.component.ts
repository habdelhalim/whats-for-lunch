import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant';
import {OrderService} from '../../service/order.service';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';
import {TodaySelectionService} from '../../service/todayselection.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  restaurant: Restaurant;
  orders: Observable<Order[]>;
  currentOrder: Order;

  constructor(private service: OrderService, private selection: TodaySelectionService) {
  }

  ngOnInit(): void {
    this.orders = this.service.list();
    this.selection.getRestaurant()
      .subscribe(value => {
        this.restaurant = value[0];
      });
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
