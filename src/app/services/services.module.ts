import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService, UsersService], // servis modullerde component olmadığı için bizim declaration exports gibi kullanımlara ihtiyacımız yok. Bunun yerine kendi servislerimizi dışarıya çıkarabilmek için providers a tanımlama yapıyoruz.
})
export class ServicesModule {}
