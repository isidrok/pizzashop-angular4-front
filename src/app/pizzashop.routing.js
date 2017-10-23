/* eslint-disable max-len*/
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SceneComponent} from './scene';

const min = ENVIRONMENT === 'production' ? '.min' : '';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: SceneComponent,
        children: [
          {
            path: 'pizzas',
            loadChildren: `src/app/modules/pizza/dist/pizzashop.pizza.umd${min}.js#pizza#PizzaModule`,
          },
        ],
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
