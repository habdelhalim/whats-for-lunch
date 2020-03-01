import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-meal-selector',
  templateUrl: './meal-selector.component.html',
  styleUrls: ['./meal-selector.component.css']
})
export class MealSelectorComponent implements OnInit {
  private service: OrderService;

  constructor(orderService: OrderService) {
    this.service = orderService;
  }

  ngOnInit(): void {
  }

  add(mealName: string) {
    console.log(mealName);
    this.service.addItem(mealName);
  }
}
