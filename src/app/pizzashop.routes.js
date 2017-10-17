/* eslint max-len: 0 */
import {AuthGuard} from './routing';
import {SceneComponent} from './scene';

const min = ENVIRONMENT === 'production' ? '.min' : '';

export const routes = [
  {
    path: 'login',
    loadChildren: `src/app/modules/login/dist/pizzashop.login.umd${min}.js#login#LoginModule`,
  },
  {
    path: '',
    component: SceneComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoadChildren: [AuthGuard],
    children: [],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
