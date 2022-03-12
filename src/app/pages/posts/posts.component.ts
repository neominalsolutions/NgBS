import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]> | undefined;
  user$: Observable<User> | undefined;
  modalRef?: BsModalRef; // sayfadaki modal referansı

  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
    private modalService: BsModalService // modal açıcak olan servisimiz
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  PostBy(userId: number, template: TemplateRef<any>) {
    this.user$ = this.usersService.getUserInfo(userId);
    this.modalRef = this.modalService.show(template); // modalservice üzerinden modal açma işlemi
  }

  HideModal() {
    this.modalRef?.hide(); // modal kapatma işlemi
  }
}
