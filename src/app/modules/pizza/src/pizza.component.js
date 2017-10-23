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
    this._getPizzasObs = this._pizzaService.getAll();
    this._getPizzasObs.subscribe((data) => {
      this.pizzas = data;
    }, (error) => {
      throw new Error(error);
    });
  }
  ngOnDestroy() {
    if (!this._getPizzasObs.closed) {
      this._getPizzasObs.unsubscribe();
    }
  }
}
