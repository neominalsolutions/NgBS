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


