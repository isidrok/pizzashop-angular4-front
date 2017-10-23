import {Component, Input} from '@angular/core';
import html from './pizzacard.component.html';
import './pizzacard.component.css';

@Component({
  selector: 'ps-pizza-card',
  template: html,
})
export class PizzaCardComponent {
  @Input() pizza;
}
