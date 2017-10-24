/* eslint-disable max-len*/
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SceneComponent} from './scene';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'pizzas',
        pathMatch: 'full',
      },
      {
        path: 'pizzas',
        loadChildren: 'src/app/modules/pizza/dist/pizzashop.pizza.umd.js#pizza#PizzaModule',
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ], {
      useHash: true,
      enableTracing: ENVIRONMENT === 'development',
    }),
  ],
  exports: [RouterModule],
})
export class PizzashopRoutingModule {}
