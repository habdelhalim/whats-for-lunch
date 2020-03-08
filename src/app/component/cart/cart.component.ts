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

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.orders = this.service.getCart();
  }

}
