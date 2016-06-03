import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealPipe } from './meal.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [NewMealComponent],
  pipes: [MealPipe],
  template:`
  <div class="container center font-white">
    <h2>Meals:</h2>
    <h5 for="selector">Filter Results</h5>
    <select class="selector font-black" (change)="onChange($event.target.value) && highCal(meal)">
      <option value="All">Show All</option>
      <option value="lowCal">Show Low Calorie</option>
      <option value="notLowCal">Show High Calorie</option>
    </select>
    <br>
    <br>
    <div *ngFor="#meal of meals | lowCal:filterMeal">
      <h3 (click)="mealClicked(meal)"  [class.selected]="selectedMeal === meal">{{ meal.name }}</h3>
       <div *ngIf="selectedMeal === meal && show === true">
         <h4>Details: {{ meal.detail }}</h4>
         <h4>Calories: {{ meal.calorie }}</h4>
       </div>
    </div>
      <div>
       <new-meal (onSubmitNewMeal)="createMeal($event)">
       </new-meal>
      </div>
  </div>
  <br>
  <br>
    `
  })

export class MealListComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public filterMeal: string = "notLowCal"
  public show: boolean = false;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  createMeal(newMeal: Meal): void {
    if (newMeal.calorie <= 500){
      newMeal.lowCal = true;
    }
    this.meals.push(newMeal);
  }

  mealClicked(meal: Meal): void {
    console.log(this.meals)
    this.selectedMeal = meal;
    this.onMealSelect.emit(meal);
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
    console.log(this.show);
  }

  onChange(filterOption){
    console.log(filterOption);
    this.filterMeal = filterOption;
  }

}
