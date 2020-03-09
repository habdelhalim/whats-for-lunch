import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders: Observable<Order[]>;
  summary: any = {};
  total: number = 0;
  amount: number = 0;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.orders = this.service.getCart();
    this.orders.subscribe(
      val => val.forEach(order => {
        this.total += Number(order.quantity)
        if (this.summary[order.description]) {
          this.summary[order.description].quantity = Number(this.summary[order.description].quantity) + Number(order.quantity)
        } else {
          this.summary[order.description] = { quantity: Number(order.quantity), price: 0 }
        }
      })
    )
  }

  updateAmount() {
    this.amount = 0;
    Object.keys(this.summary)
      .forEach(key => this.amount += Number(this.summary[key].price) * Number(this.summary[key].quantity))
  }

}
