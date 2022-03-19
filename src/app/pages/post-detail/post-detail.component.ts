import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  // dinamik olarak routerden gelen bilgileri yakalamak için ActivatedRoute service kullanırız.
  // bir paket yüklememize gerek yok angular kendi servisi
  // ActivatedRoute servis angularda o anki componente atılan dinamik paramtere isteğini yakalamamızı sağlayan servistir.

  post$: Observable<Post> | undefined;
  comments$: Observable<Comment[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router // ts dosyasından sayfalar arasında yönlendirme yapmamızı sağlayan servisimiz // dinamik route değerlerini okuyabilmemizi sağlayan servisimizdir. aynı zamanda sayfalar yani component arası yönlendirme işlemide yapar.
  ) {}

  ngOnInit(): void {
    let params: any = this.route.snapshot.params; // params dinamik route değerini okur
    // queryParams ise querystring değerini okumamız sağlar.
    console.log('params', params);
    this.post$ = this.postsService.getPostById(params.id); // id:5 numaralı postu çek
    this.comments$ = this.postsService.getPostComments(params.id); // id:5 5 nolu posta ait commentleri yorunmları çek.
  }

  // window confirm ile kullanıcıya bir mesaj soran arayüz OKCancel Evet Kayıt arayüzü çıkardık. JS özelliği.
  redirectToPosts() {
    let result = window.confirm('Sayfadan ayrılmak istediğinize emin misiniz?');

    // Kullanıcı Tamam OK butonuna bastıysa
    if (result == true) {
      this.router.navigateByUrl('/posts'); // post linkini yazarak yöneldirme yaptık
      // post sayfasına yönlendir.
    } else {
      alert('Yönledirme iptal edildi!');
    }
  }
}
