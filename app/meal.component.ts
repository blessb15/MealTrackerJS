// import { Component } from 'angular2/core';
// import { Meal } from './meal.model';
//
// @Component({
//     selector: 'meal-display',
//     inputs: ['Meal'],
//   template: `
//   <div class="container">
//     <div *ngFor="#meal of Meals" >
//       <h3 (click)="MealClicked(Meal)" [class.selected]="selectedMeal === Meal">{{ Meal.name }}</h3>
//       <ul *ngIf="selectedMeal === Meal">
//       <li>Details: {{ Meal.detail }}</li>
//       <li>Calories: {{ Meal.calorie }}</li>
//   `
//
// })
// export class MealComponent {
//   public meal: Meal;
// }
