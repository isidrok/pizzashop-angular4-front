import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services';

@Injectable()
export class AuthGuard {
  constructor(router: Router, authService: AuthService) {
    this._router = router;
    this._authService = authService;
  }
  _checkAndRedirect(route, state) {
    return true;
    // if (this._authService.getToken()) {
    //   return true;
    // }
    // let returnUrl = state && state.url;
    // this._router.navigate(['/login'], {queryParams: {returnUrl}});
    // return false;
  }
  canActivate(route, state) {
    return this._checkAndRedirect(route, state);
  }
  canActivateChild(route, state) {
    return this._checkAndRedirect(route, state);
  }
  canLoadChildren(route, state) {
    return this._checkAndRedirect(route, state);
  }
  canLoad(route, state) {
    return this._checkAndRedirect(route, state);
  }
}
