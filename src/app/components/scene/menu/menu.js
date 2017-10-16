import {Component, Input, ViewChild} from '@angular/core';
import html from './menu.html';
// import './css/menu.css';

@Component({
  selector: 'ps-menu',
  template: html,
})
export class Menu {
    @Input() opened = null;
    @Input() docked = null;
    @Input() closeMenu = null;
    @ViewChild('sidenav') sidenav = null;

    ngAfterViewChecked() {
      if (this.opened || this.docked) {
        this._open();
      } else {
        this._close();
      }
    }
    _close() {
      !this.docked && this.sidenav && this.sidenav.close();
    }
    _open() {
      this.sidenav && this.sidenav.open();
    }
}
