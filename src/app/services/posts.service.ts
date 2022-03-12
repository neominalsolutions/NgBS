import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

// angularda bir servis açtığımızda @Injectable ile tanımlanıyor. bu sayede bir componentin constructorından bu servis çağırılabilir.
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    // servis methodları return etmelidir.
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
