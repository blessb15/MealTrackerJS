import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-Meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <hr>
  <div class="Meal-form center">
    <h3>Create Meal</h3>
    <input placeholder="Name" class="input-lg" #newName required>
    <input placeholder="Details" class="input-lg" #newDetail required>
    <input placeholder="Calories" class="input-lg" #newCalorie required>
    <br>
    <br>
  <button (click)="addMeal(newName, newDetail, newCalorie, newAlcohol)" class="btn btn-success">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetail: HTMLInputElement, userCalorie: HTMLInputElement){
    var Meal = new Meal(userName.value, userDetail.value, userCalorie.value);
    this.onSubmitNewMeal.emit(Meal);
    userName.value = "";
    userDetail.value = "";
    userCalorie.value = "";
  }
}
