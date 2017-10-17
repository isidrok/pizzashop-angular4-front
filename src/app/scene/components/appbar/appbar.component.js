import {Component} from '@angular/core';
import {SceneService} from '../../scene.service';
import html from './appbar.component.html';

@Component({
  selector: 'ps-app-bar',
  template: html,
})
export class AppBarComponent {
  constructor(sceneService: SceneService) {
    this._sceneService = sceneService;
  }
  initialize() {
    this.show = !this._sceneService.menuDocked;
  }
  toggleMenu = () => {
    this._sceneService.toggleMenu();
  }
  mustShow = () => {
    return !this._sceneService.menuDocked;
  }
}
