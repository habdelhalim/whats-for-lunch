import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';
import {Restaurant} from '../../model/restaurant';
import {AuthService} from '../../service/auth.service';
import {OrderService} from '../../service/order.service';
import {TodaySelectionService} from '../../service/todayselection.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  restaurant: Restaurant;
  orders: Observable<Order[]>;
  currentOrder: Order = {
    restaurant: 'default',
    quantity: 1,
    author: 'anonymous',
    description: ''
  };

  constructor(private service: OrderService,
              private selection: TodaySelectionService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.orders = this.service.list();
    this.authService.getUser()
      .subscribe(user => {
        if (user) {
          this.currentOrder.author = user.displayName;
        }
      });

    this.selection.getRestaurant()
      .subscribe(value => {
        this.restaurant = value[0];
        if (this.restaurant) {
          this.currentOrder.restaurant = this.restaurant.name;
        }
      });
  }

  add() {
    this.service.add(this.currentOrder);
    this.reset();
  }

  empty() {
    this.service.clear();
  }

  reset() {
    this.currentOrder.description = '';
    this.currentOrder.quantity = 1;
  }

  delete(order: Order) {
    this.service.remove(order);
  }
}
