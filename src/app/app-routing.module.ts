import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard], // gizli içerikli sayfalar. ve bu sayfalara erişmek için bu guard koruyucudan geçmesi lazım.
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard], // hangi ilgili componente belirli yetki dahilinde yada bir kimlik doğrulaması sonrası girebilmek için bir kontrollü arkadaşı sisteme tanıtmamız gerekiyor.
    // Yani bir componentin bir page componentin dom'a yerleşip yerleşmeme kararını verdiğimiz ara kontrol mekanizmasına biz guard ismini veriyoruz.
  },
  {
    path: 'post-detail/:id', // dinamik route tanımlması yapmış olduk.
    component: PostDetailComponent,
    canActivate: [AuthGuard], // polis bekçi. giriş için accesstoken lazım.
    // route config dosyasında canActivate kısmına ilgili guard attibute tanımlıyoruz.
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
