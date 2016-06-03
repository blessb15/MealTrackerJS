import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <hr>
  <div class="Meal-form center">
    <h3>Log A Meal</h3>
    <input placeholder="Name" class="input-lg form-group font-black" #newName required>
    <input placeholder="Details" class="input-lg form-group font-black" #newDetail required>
    <input placeholder="Calories" class="input-lg form-group font-black" #newCalorie required>
    <br>
    <br>
  <button (click)="addMeal(newName, newDetail, newCalorie)" class="btn btn-success">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;

  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(userName: HTMLInputElement, userDetail: HTMLInputElement, userCalorie: HTMLInputElement){
    var meal = new Meal(userName.value, userDetail.value, parseInt(userCalorie.value), 0);
    this.onSubmitNewMeal.emit(meal);
    userName.value = "";
    userDetail.value = "";
    userCalorie.value = "";
  }
}
