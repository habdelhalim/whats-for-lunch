import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant';
import {RestaurantService} from '../../service/restaurant.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  @Input('restaurant') restaurant: Restaurant;

  constructor(private service: RestaurantService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.service.save(this.restaurant);
  }

  delete() {
    this.service.remove(this.restaurant.id);
  }
}
