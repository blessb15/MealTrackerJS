import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 class="center font-white font">Meal Tracker</h1>
      <hr>
      <meal-list [meals] = "meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Cheeseburger", "lettuce, mayo, tomatos, ketchup and a side of fries.", 600, 0),
      new Meal("Mac & Cheese","homemade with cheddar, mozzarella, and parmesian cheese", 520, 1)
    ];
  }

  mealWasSelected(meal: Meal): void {
  }
}
