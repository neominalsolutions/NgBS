import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // kullanıcının oturumunun açık olup olmadığını kontrol ettiğim servis
  IsAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // local storage da access token varsa login olduğumdan dolayı true yoksa false

    if (token != null && token != undefined) {
      return true;
    }

    return false;
  }

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
