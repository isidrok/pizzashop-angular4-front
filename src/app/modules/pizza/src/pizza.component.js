import {Component} from '@angular/core';
import {PizzaService} from './pizza.service';
import html from './pizza.component.html';
import './pizza.component.css';

@Component({
  selector: 'ps-pizza',
  template: html,
})
export class PizzaComponent {
  constructor(pizzaService: PizzaService) {
    this._pizzaService = pizzaService;
    this._getPizzas();
  }
  _getPizzas() {
    this._pizzaService.getAll()
      .subscribe((data) => {
        this.pizzas = data;
      }, (error) => {
        throw new Error(error);
      });
  }
}
