import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-selector',
  templateUrl: './meal-selector.component.html',
  styleUrls: ['./meal-selector.component.css']
})
export class MealSelectorComponent implements OnInit {
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.log(name);
  }
}
