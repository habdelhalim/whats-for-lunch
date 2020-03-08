import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../model/restaurant';
import { OrderService } from '../../service/order.service';
import { Observable } from 'rxjs';
import { Order } from '../../model/order';
import { TodaySelectionService } from '../../service/todayselection.service';
import { AuthService } from '../../service/auth.service';
import { CartService } from 'src/app/service/cart.service';

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
    private cartService: CartService,
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
    this.service.remove();
  }

  reset() {
    this.currentOrder.description = '';
    this.currentOrder.quantity = 1;
  }

  checkout() {
    this.cartService.checkout(this.orders);
  }
}
