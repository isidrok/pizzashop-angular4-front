import {NgZone, Injectable} from '@angular/core';

const mqlGtSm = window.matchMedia('(min-width: 960px)');

@Injectable()
export class SceneService {
  _sidenav = null;
  _menuDocked = null;
  _menuOpened = null;
  constructor(ngZone: NgZone) {
    this._ngZone = ngZone;
  }
  set sidenav(value) {
    this._sidenav = value;
    this._initialize();
  }
  get menuDocked() {
    return this._menuDocked;
  }
  closeMenu() {
    if (this._sidenav && !this._menuDocked) {
      this._sidenav.close();
      this._menuOpened = false;
    }
  }
  openMenu() {
    if (this._sidenav) {
      this._sidenav.open();
      this._menuOpened = true;
    }
  }
  _initialize() {
    mqlGtSm.addListener((result) =>
      this._ngZone.run(() => this._onWindowSizeChange(result))
    );
    this._onWindowSizeChange(mqlGtSm);
  }
  _onWindowSizeChange = ({matches}) => {
    this._menuDocked = matches;
    this._toggleIf(matches);
  };
  toggleMenu() {
    this._toggleIf(!this._menuOpened);
  }
  _toggleIf(condition) {
    if (condition) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
  dispose() {
    mqlGtSm.removeListener(this._onWindowSizeChange);
    this._sidenav = null;
  }
}
