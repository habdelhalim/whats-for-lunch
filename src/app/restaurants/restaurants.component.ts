import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant';
import {RestaurantService} from '../restaurant.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Observable<any[]>;
  selectedRestaurant: Restaurant = {
    id: null,
    name: 'new Restaurant'
  };

  constructor(private service: RestaurantService) {
    this.restaurants = service.getList();
  }

  ngOnInit(): void {
  }

  log() {
    console.log('changing module:' + this.selectedRestaurant);
  }

  clearDB() {
    this.service.clear();
  }

  create() {
    this.selectedRestaurant = {
      id: null,
      name: 'new Restaurant'
    };
  }
}
