import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant';
import {TodaySelectionService} from '../../service/todayselection.service';
import {RestaurantService} from '../../service/restaurant.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-today-selection',
  templateUrl: './today-selection.component.html',
  styleUrls: ['./today-selection.component.css']
})
export class TodaySelectionComponent implements OnInit {
  todayRestaurant: Restaurant;
  restaurants: Observable<Restaurant[]>;

  constructor(private service: TodaySelectionService, private restaurantService: RestaurantService) {

  }

  ngOnInit(): void {
    this.todayRestaurant = this.service.getRestaurant();
    this.restaurants = this.restaurantService.list();
  }

  updateSelection() {
    console.log('changing default' + this.todayRestaurant);
    this.service.setRestaurant(this.todayRestaurant);
  }
}
