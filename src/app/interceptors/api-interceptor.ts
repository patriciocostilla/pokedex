import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://pokeapi.co/api/v2';

export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newUrl: string = req.url;
    if (!req.url.includes(baseUrl)) {
      newUrl = `${baseUrl}${req.url}`;
    }
    const apiReq = req.clone({
      url: newUrl,
    });
    return next.handle(apiReq);
  }
}
