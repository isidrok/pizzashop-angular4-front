import {Component} from '@angular/core';
import {SceneService} from './scene.service';
import html from './scene.component.html';
import './css/scene.component.css';

@Component({
  selector: 'ps-scene',
  template: html,
  providers: [SceneService],
})
export class SceneComponent {
  constructor(sceneService: SceneService) {
    this._sceneService = sceneService;
  }
  ngOnDestroy() {
    this._sceneService.dispose();
  }
}
