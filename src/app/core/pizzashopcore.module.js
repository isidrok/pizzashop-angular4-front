
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MaterialModule,
  RuleDirective,
  ValidationErrorComponent,
} from './packages';

const MODULES = [
  CommonModule,
  FormsModule,
  MaterialModule,
];
const ELEMENTS = [
  ValidationErrorComponent, RuleDirective,
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...ELEMENTS],
  declarations: [...ELEMENTS],
})
export class PizzashopCoreModule {}
