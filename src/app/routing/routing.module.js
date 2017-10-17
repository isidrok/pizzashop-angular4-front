import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './guards';
import {routes} from '../pizzashop.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: ENVIRONMENT === 'development',
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class RoutingModule {}
