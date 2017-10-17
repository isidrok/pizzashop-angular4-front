import {Injectable} from '@angular/core';

const TOKEN_KEY = 'psToken';

@Injectable()
export class AuthService {
  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  setToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
}
