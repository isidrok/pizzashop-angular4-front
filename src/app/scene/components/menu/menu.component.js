import {Component, ViewChild} from '@angular/core';
import {SceneService} from '../../scene.service';
import html from './menu.component.html';
import './menu.component.css';

const menuItemsMock = [
  {
    path: 'pizzas',
    text: 'SHOW PIZZAS',
  },
  {
    path: 'pizzas/add',
    text: 'ADD PIZZA',
  },
];

@Component({
  selector: 'ps-menu',
  template: html,
})
export class MenuComponent {
  @ViewChild('sidenav') sidenav = null;
  menuItems = menuItemsMock;
  constructor(sceneService: SceneService) {
    this._sceneService = sceneService;
  }
  ngAfterContentInit() {
    this._sceneService && this.sidenav &&
     (this._sceneService.sidenav = this.sidenav);
  }
}
