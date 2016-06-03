import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 class="center">Meal Tracker</h1>
      <hr>
      <meal-list [Meals] = "Meals" (onMealSelect)="MealWasSelected($event)"></meal-list>
    </div>
  `
})

export class AppComponent {

}
