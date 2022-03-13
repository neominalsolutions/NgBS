import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// HttpInterceptor interface'inden intercept yani araya gir methodu ile gelir. intercep methodunda istek sunucuya gönderilmeden önce araya girip istek üzerinde bir değişiklik yapabilir. access_token localstorage okunup suncuuya gönderilmeden önce header üzerine eklenmesini bu interceptor vasıtası ile yapacağız.

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('intercept');

    // buradaki servis her bir api isteğinde araya girecek ve eğer login olmuş isek access_token bilgisi alıp sunucuya istek atarken request header'da bu bilgi paylaşacak.

    if (this.authService.IsAuthenticated()) {
      const token = localStorage.getItem('access_token');

      let req = request.clone({
        headers: request.headers
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${token}`),
      });

      // request'in header'ında JWT token'ı Bearer tipinde gönderiyoruz.
      // yani sunucuya token bilgisi taşıyacağımızı ise Authorization tagi söylüyor.

      console.log('req', req);

      return next.handle(req);
    }

    // Bu aşağıdaki koda girerse herhangi bir şekilde istek atarken token göndermez.
    // next ile sürecin istedeğin kaldığı yerden devam ettirilmesi sağlanıyor.
    // gelen web request karşılayıp bu web request işleyici bir özelliğe sahiptir.
    return next.handle(request);
  }
}
