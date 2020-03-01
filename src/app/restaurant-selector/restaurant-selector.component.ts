import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-selector',
  templateUrl: './restaurant-selector.component.html',
  styleUrls: ['./restaurant-selector.component.css']
})
export class RestaurantSelectorComponent implements OnInit {
  restaurant = 'dummy';
  constructor() { }

  ngOnInit(): void {
  }

}
