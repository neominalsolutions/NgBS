-- Ngx Boostrap Kurulum adımları
-- 1.adım ng add ngx-bootstrap eğer bu kurulumda hata vermez ise herşey otomatik olarak kurulur

-- Eğer hata verirse aşağıdaki yönergeeleri izleyelim

1- npm install ngx-bootstrap --save
2- npm install bootstrap --save
3- src/styles.css dosyasına boostrap css import edicez.
@import '~bootstrap/dist/css/bootstrap.min.css';
4- app.component.ts dosyasına import edelim
import { setTheme } from 'ngx-bootstrap/utils';

aşağıdaki kodu app.component.ts içerisine yazalım

  constructor() {
    setTheme('bs3'); // or 'bs4'
  }




-- Navbar Component oluşturma adımları
1.components klasörü açalım
2. ng generate module components --flat yazalım
3. components klasörüne ng generate component navbar açalım
3.1 componentsModule altına export olarak Navbar componenti çıkaralım
4. boostrap navbar'ı navbar.html dosyasına kopyalayalım
5. src altına Pages klasörü açalım
6. ng generate component Home ile Anasayfa açalım
7. AppModule Dosyasına import olarak ComponentsModule ekleyelim
8. AppRouting Module dosyasına gidip routes içine 
   path='' component:HomeComponent route tanımlıyalım

    {
    path:'',
    component:HomeComponent
  }

9. Home Component dosyasına gidip aşağıdaki kodu html yapıştıralım
<app-navbar></app-navbar>


-- Uygulamaya OffCanvas nasıl eklenir

1. Angular.json dosyasında scripts altına 
"node_modules/bootstrap/dist/js/bootstrap.min.js" tanımlamayı unutmayalım

Uygulama Geneline Servis Module tanımlaması yapma kodu
1. ng g module services --module app

Bunu yapmamızın sebebi ise uygulama genelinde bu modul üzerinden pages componentlerde servisleri kullanarak sayfalarımıza veri çekebiliriz. Bu sistemi components module de olduğu gibi merkezileştiriyoruz.

2. ng g service services/posts ile kendimize makalelerin bilgisini çekebileceğiz bir servis açtık.

2.1 Services Module üzerinden providers tanımlaması yaparak açtığımızı PostsService aşağıdaki gibi ekledik.

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PostsService], // servis modullerde component olmadığı için bizim declaration exports gibi kullanımlara ihtiyacımız yok. Bunun yerine kendi servislerimizi dışarıya çıkarabilmek için providers a tanımlama yapıyoruz.
})

2.2 Posts Service içerisindeki constructor'a  private http: HttpClient servisimizi tanıttık. ve GetPosts adında bir method tanımlaması yaptık.

3. adım makaleri çekeceğimiz için bu makalelerin verisini karşılacak bir model tanımı yaptık. ng g interface models/post


User Service ile Modalda Makaleyi yazan kullanıcı bilgilerinin görüntülenmesi

1. ng g service services/users
2. ng g interface models/user 
3. Users Service içerisne GetUserInfo adında bir method tanımladık.

Uygulamayı Branch olarak gün gün clonelama komutu

git clone -b AngularLessonOne https://github.com/neominalsolutions/NgBS.git


Angular Dinamik Route Oluşturma İşlemleri

1. Routing Module dosyasına aşağıdaki gibi dinamik bir route tanımlaması yaparız.
 {
    path: 'post-detail/:id', // dinamik route tanımlması yapmış olduk.
    component: PostDetailComponent,
  },

2. İlgili sayfadan aşağıdaki gibi dinamik bir link örneği veririz.

  <a class="btn btn-secondary" routerLink="/post-detail/{{ item.id }}"
      >Detail</a

3. Yönledirme yaptığımız componente gidip oradan yöneldirme yapılan değeri yakalarız. Bunun için Angularda ActivatedRoute denilen bir servis kullandık.


let params: any = this.route.snapshot.params; 

4. Eğer typescript dosyası ts uzantılı dosya üzerinden bir kontrol sonrası yönlendirme yapacak isek bu durumda ise angular Router servisini kullanırız.

import { ActivatedRoute, Router } from '@angular/router';

5. ilgili method ile aşağıdaki gibi bir yönledirme yaptık.

 this.router.navigateByUrl('/posts'); 
 



