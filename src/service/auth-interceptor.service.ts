import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  // private url = 'https://rococo.net.cn:1443/redmine/';
  private url = '';
  // private authKey = 'a5487554b03b86fcc4b631ebe99014b85251e91e';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      url: this.url + req.url,
      // headers: req.headers.set('X-Redmine-API-Key', this.authKey)
    });
    return next.handle(authReq);
  }
}
