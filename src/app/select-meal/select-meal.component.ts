import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-select-meal',
  templateUrl: './select-meal.component.html',
  styleUrls: ['./select-meal.component.css']
})
export class SelectMealComponent implements OnInit {
  restaurant: Restaurant;

  constructor() {
  }

  ngOnInit(): void {
  }

}
