import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseHttpService} from 'pizzashop';

@Injectable()
export class PizzaService extends BaseHttpService {
  constructor(http: HttpClient) {
    super(http, 'pizzas');
  }
  get(id) {
    return this.http.get(
      super.getRouteById(id)
    );
  }
  getAll() {
    return this.http.get(
      super.getRoute()
    );
  }
}
