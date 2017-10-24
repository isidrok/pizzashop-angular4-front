import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PizzaComponent} from './pizza.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PizzaComponent},
  ])],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
