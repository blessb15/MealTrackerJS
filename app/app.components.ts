import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 class="center font-white">Meal Tracker</h1>
      <hr>
      <meal-list [meals] = "meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("CheeseBurger", "With ketchup,  mayo, tomatos, and a side of fries.", 500, 0),
      new Meal("Mac & Cheese", "With bbq sauce, and a side of fries.", 300, 1)
    ];
  }

  mealWasSelected(meal: Meal): void {
  }
}
