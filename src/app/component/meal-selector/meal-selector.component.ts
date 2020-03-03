import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';


@Component({
  selector: 'app-meal-selector',
  templateUrl: './meal-selector.component.html',
  styleUrls: ['./meal-selector.component.css']
})
export class MealSelectorComponent implements OnInit {
  @Input('restaurant') restaurant: string;
  private service: OrderService;

  constructor(orderService: OrderService) {
    this.service = orderService;
  }

  ngOnInit(): void {
  }

  add(mealName: string) {
    console.log(mealName);
    this.service.addItem(mealName, this.restaurant);
  }
}
