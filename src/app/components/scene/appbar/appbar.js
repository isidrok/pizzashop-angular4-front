import {Component, Input} from '@angular/core';
import html from './appbar.html';

@Component({
    selector: 'ps-app-bar',
    template: html
})
export class AppBar {
    @Input() hidden = true;
    @Input() toggleMenu = null;
}
