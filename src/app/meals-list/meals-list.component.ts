import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  items: Observable<any[]>;
  constructor(orderservice: OrderService) {
    this.items = orderservice.getItems();
  }

  ngOnInit(): void {
  }

}
