import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // id gönderilen user ait bilgileri döner.
  getUserInfo(userId: number) {
    // sadece tek bir result döneceği için User tipinde tanımlamasını yaptık.
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
