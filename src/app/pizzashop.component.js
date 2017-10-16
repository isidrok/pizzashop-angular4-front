import {Component, NgZone} from '@angular/core';
import html from './pizzashop.component.html';
import './css/index.css';

const mqlGtSm = window.matchMedia('(min-width: 960px)');

@Component({
  selector: 'ps-pizzashop',
  template: html,
})
export class PizzashopComponent {
  constructor(ngZone: NgZone) {
    /* 
         * Angular won't detect updates in props due to events
         * not being tracked by zone, we need to make it explicitly
         * run the function. We store that function for later removing
         * the listener.
         */
    this._ngZone = ngZone;
    mqlGtSm.addListener(this._onWindowSizeChanges);
    let matches = mqlGtSm.matches;
    this.menuOpened = matches;
    this.menuDocked = matches;
  }
  _onWindowSizeChanges = (result) => {
    this._ngZone.run(() => this._toggleMenuMql(result));
  }
  ngOnDestroy() {
    this.gtsm.removeListener(this.onGtsm);
  }
  toggleMenu = () => {
    this.menuOpened = !this.menuOpened || this.menuDocked;
  }
  closeMenu = () => {
    this.menuOpened = false || this.menuDocked;
  }
  _toggleMenuMql({matches}) {
    this.menuDocked = matches;
    this.menuOpened = matches;
  }
}

