import {Component, Input} from '@angular/core';
import {SceneService} from '../../../../scene.service';
import html from './menuitem.component.html';
import './menuitem.component.css';

@Component({
  selector: 'ps-menu-item',
  template: html,
})
export class MenuItemComponent {
    @Input() text = null;
    @Input() path = null;
    constructor(sceneService: SceneService) {
      this._sceneService = sceneService;
    }
    closeMenu = () => {
      this._sceneService.closeMenu();
    }
}
