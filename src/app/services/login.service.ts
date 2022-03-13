import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginParam: any) {
    console.log('loginParam', loginParam);

    return this.http.post('https://localhost:5001/api/tokens', loginParam).pipe(
      map((tokenResult: any) => {
        // token bilgisini alıp bu token bilgisini local storage da sakla
        // eğer access_token varsa login'in yoksa değilim
        // sonrasında ise bu sakladığımı access_toekn bilgisi api her istekte göndereceğimiz bir interceptor tanımlaması yapıcaz.
        // login olurken araya girip access_token bilgisini set ettik.
        // return edeceğimiz değeri değiştirdik ve istedeiğimiz sonucu döndürdük.
        console.log('tokenResult', tokenResult);

        localStorage.setItem('access_token', tokenResult.accessToken);

        return { redirect: '/', succeded: true };
      }),
      catchError((error) => {
        return of({
          message: 'Kullanıcı adı veya parola hatalı',
          succeded: false,
        });
      })
    );
  }

  fakelogin(loginParam: any) {
    console.log('loginParam', loginParam);

    return this.http.post('https://reqres.in/api/login', loginParam).pipe(
      map((tokenResult: any) => {
        // token bilgisini alıp bu token bilgisini local storage da sakla
        // eğer access_token varsa login'in yoksa değilim
        // sonrasında ise bu sakladığımı access_toekn bilgisi api her istekte göndereceğimiz bir interceptor tanımlaması yapıcaz.
        // login olurken araya girip access_token bilgisini set ettik.
        // return edeceğimiz değeri değiştirdik ve istedeiğimiz sonucu döndürdük.
        console.log('tokenResult', tokenResult);

        localStorage.setItem('access_token', tokenResult.token);
        localStorage.setItem('email', 'eve.holt@reqres.in');

        return { redirect: '/', succeded: true };
      }),
      catchError((error) => {
        return of({
          message: 'Kullanıcı adı veya parola hatalı',
          succeded: false,
        });
      })
    );
  }
}
