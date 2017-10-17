import {Injectable} from '@angular/core';
import {BASE_URL} from './baseurl';

@Injectable()
export class APIInterceptor {
  intercept(req, next) {
    const apiReq = req.clone({url: `${BASE_URL}/${req.url}`});
    return next.handle(apiReq);
  }
};
