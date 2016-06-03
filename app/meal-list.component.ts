import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [NewMealComponent, MealComponent],
  template:`
  <div class="container center">
    <h2>Meals:</h2>
    <br>
    <br>
    <div *ngFor="#meal of meals">
      <h3 (click)
      <h3 (click)="kegClicked(keg)" [class.selected]="selectedKeg === keg">{{ keg.name }}</h3>
       <div *ngIf="selectedKeg === keg && show === true">
         <h5>Details: {{ keg.brand }}</h5>
         <h5>Calories: {{ keg.price }} dollars</h5>
         <br>
       </div>
    </div>
      <div>
       <new-keg (onSubmitNewMeal)="createMeal($event)">
       </new-keg>
      </div>
  </div>
    `
  })

export class MealListComponent {
  public meals: Meal[];
  public selectedMeals: Meal;
  public onMealSelect: EventEmitter<Meal>;

}
