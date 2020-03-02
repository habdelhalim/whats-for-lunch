import {Component, OnInit, Output} from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-restaurant-selector',
  templateUrl: './restaurant-selector.component.html',
  styleUrls: ['./restaurant-selector.component.css']
})
export class RestaurantSelectorComponent implements OnInit {
  restaurants: Observable<any[]>;

  constructor(private service: RestaurantService) {
    this.restaurants = service.getList();
  }

  ngOnInit(): void {
  }

}
