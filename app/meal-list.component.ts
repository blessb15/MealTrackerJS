import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealPipe } from './meal.pipe';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [NewMealComponent, EditMealDetailsComponent],
  pipes: [MealPipe],
  template:`
  <div class="center font-white">
    <select class="selector font-black"  (change)="onChange($event.target.value) && highCal(meal)">
      <option value="All">Show All</option>
      <option value="lowCal">Show Low Calorie</option>
      <option value="notLowCal">Show High Calorie</option>
    </select>
    <br>
    <br>
    <div *ngFor="#meal of meals | lowCal:filterMeal">
      <h3 (click)="mealClicked(meal)"  [class.selected]="selectedMeal === meal">{{ meal.name }}</h3>
       <div *ngIf="selectedMeal === meal && show === true" class="box">
         <h4>Details: {{ meal.detail }}</h4>
         <h4>Calories: {{ meal.calorie }}</h4>
       </div>
    </div>
    <br>
    <br>
      <edit-meal-details *ngIf="selectedMeal"  [meal]="selectedMeal">
      </edit-meal-details>
      <new-meal (onSubmitNewMeal)="createMeal($event)">
      </new-meal>
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
      } else {
        newMeal.lowCal = false;
      }
    this.meals.push(newMeal);
  }

  // refreshMeal(newMeal: Meal): void {
  //   if (newMeal.calorie <= 500){
  //     newMeal.lowCal = true;
  //   } else {
  //     newMeal.lowCal = false;
  //   }
  // }

  mealClicked(meal: Meal): void {
    this.selectedMeal = meal;
    this.onMealSelect.emit(meal);
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  onChange(filterOption){
    this.filterMeal = filterOption;
  }

}
