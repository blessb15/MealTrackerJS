import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [NewMealComponent],
  template:`
  <div class="container center">
    <h2>Meals:</h2>
    <br>
    <br>
    <div *ngFor="#meal of meals">
      <h3 (click)="mealClicked(meal)" [class.selected]="selectedMeal === meal">{{ meal.name }}</h3>
       <div *ngIf="selectedKeg === meal && show === true">
         <h5>Details: {{ meal.brand }}</h5>
         <h5>Calories: {{ meal.price }} dollars</h5>
         <br>
       </div>
    </div>
      <div>
       <new-meal (onSubmitNewMeal)="createMeal($event)">
       </new-meal>
      </div>
  </div>
    `
  })

export class MealListComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public show: boolean;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(meal: Meal): void {
    this.selectedMeal = meal;
    this.onMealSelect.emit(meal);
    if (this.show === false) {
      this.show === true;
    } else {
      this.show === false;
    }
  }


}
