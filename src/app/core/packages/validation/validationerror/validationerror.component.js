import {Component, Input} from '@angular/core';
import html from './validationerror.component.html';
import './validationerror.component.css';

@Component({
  selector: 'ps-validation-error',
  template: html,
})
export class ValidationErrorComponent {
  @Input() control;
  getErrors() {
    return Object.values((this.control && this.control.errors) || {});
  }
}
