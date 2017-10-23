import {NgModule} from '@angular/core';
import {PizzaRoutingModule} from './pizza.routing';
import {PizzashopCoreModule} from 'pizzashop';
import {PizzaComponent} from './pizza.component';
import {PizzaService} from './pizza.service';
import {PizzaCardComponent} from './components';

@NgModule({
  imports: [
    PizzashopCoreModule,
    PizzaRoutingModule,
  ],
  declarations: [
    PizzaComponent,
    PizzaCardComponent,
  ],
  providers: [
    PizzaService,
  ],
})
export class PizzaModule {}
