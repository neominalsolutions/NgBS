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
