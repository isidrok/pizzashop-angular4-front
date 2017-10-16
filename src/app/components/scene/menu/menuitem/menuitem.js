import {Component, Input} from '@angular/core';
import html from './menuitem.html';

@Component({
    selector: 'ps-menu-item',
    template: html
})
export class MenuItem {
    @Input() text = null;
    @Input() link = null;
}
