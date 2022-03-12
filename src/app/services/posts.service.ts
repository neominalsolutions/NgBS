import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
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

  // sadece tek bir post bilgisi çekeceğiz.
  getPostById(postId: number) {
    // servis methodları return etmelidir.
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }

  // ilgili postId üzerinden comment dönsün
  getPostComments(postId: number) {
    // servis methodları return etmelidir.
    return this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
