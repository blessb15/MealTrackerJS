import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name:"lowCal",
  pure: false
})

export class MealPipe implements PipeTransform {

  transform(input: Meal[], args) {
    var desiredMeal = args[0];
    if(desiredMeal === "lowCal") {
      return input.filter((meal) => {
        return meal.lowCal;
      });
    } else if (desiredMeal === "notLowCal") {
      return input.filter((meal) => {
        return !meal.lowCal;
      });
    } else {
      return input;
    }
  }
}
