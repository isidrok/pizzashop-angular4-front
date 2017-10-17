import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {APIInterceptor} from './api.interceptor';

export const APIInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true,
};
