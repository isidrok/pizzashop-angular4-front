export class BaseHttpService {
  constructor(http, url) {
    this.http = http;
    this._url = url;
  }
  getRoute() {
    return this._url;
  }
  getRouteById(id) {
    return `${this.getRoute()}/${id}`;
  }
}
