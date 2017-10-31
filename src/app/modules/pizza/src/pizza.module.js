import {NgModule} from '@angular/core';
import {PizzaRoutingModule} from './pizza.routing';
import {PizzashopCoreModule} from 'pizzashop';
import {PizzaComponent} from './pizza.component';
import {PizzaService} from './pizza.service';
import {PizzaCardComponent} from './components';
import {TestComponent, Test2Component} from './test';

@NgModule({
  imports: [
    PizzashopCoreModule,
    PizzaRoutingModule,
  ],
  declarations: [
    PizzaComponent,
    PizzaCardComponent,
    TestComponent,
    Test2Component,
  ],
  providers: [
    PizzaService,
  ],
})
export class PizzaModule {}
