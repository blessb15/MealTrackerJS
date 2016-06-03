import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <h2 class="font">Edit Meal</h2>
  <div class="form-group font-black" (change)="checkCalories()">
    <input [(ngModel)]="meal.name" class="form-group" placeholder="Name"/>
    <input [(ngModel)]="meal.detail" class="form-group" placeholder="Details"/>
    <input [(ngModel)]="meal.calorie" class="form-group" placeholder="Calories"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;

  checkCalories(){
    if (this.meal.calorie < 500){
      this.meal.lowCal = true;
    } else {
      this.meal.lowCal = false;
    }
  }
}
