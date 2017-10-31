import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PizzaComponent} from './pizza.component';
import {TestComponent, Test2Component} from './test';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PizzaComponent},
    {path: 'test', component: TestComponent},
    {path: 'test/:id', component: Test2Component},
  ])],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
