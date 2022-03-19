import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Kullanıcı oturum açtıktan sonra accessToken bilgisine sahiptir. Bu token bilgisi üzerinden JS uygulamasında bu kullanıcın token sahipse oturumunun açık olarak kabul edilmesi gerekir. eğer token yoksa kullanıcı oturum açmamıştır. Bu serviste Angular uygulamasında kullanıcının oturumunun kontrolü yapılacaktır.

  // kullanıcının oturumunun açık olup olmadığını kontrol ettiğim servis
  IsAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // local storage da access token varsa login olduğumdan dolayı true yoksa false

    if (token != null && token != undefined) {
      // token bilgisi varsa
      return true; // oturum açmış
    }

    return false; // oturum açılmamış
  }

  // AuthService deki bu method oturum açmış olan kullanıcının Email bilgisini istedeğimiz zaman okuyabildik.
  UserEmail(): string {
    // login isek email adresimizi döndür
    if (this.IsAuthenticated()) {
      const email = localStorage.getItem('email') as string;

      return email;
    }

    // değilsek boş döndür.
    return '';
  }
}
