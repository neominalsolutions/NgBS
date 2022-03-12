import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  catchError,
  filter,
  map,
  Observable,
  of,
  Subscription,
  tap,
} from 'rxjs';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  // todos: Todo[] = []; // kendimize todos değişkeni açtık. bu değişkene gelen json bastık.

  // axios yada fetch karşılık gelen bir servis var @angular/common/http gelen HttpClient servis.
  // component içerisinde bir servis kullanmak için component constructor'ına servisimizi tanıtıyoruz.
  // Observable apiden veri çekme yada veri gönderme işlemlerinde httpclient servis kullandığımız zaman dönecek olan result observable tipinde tanımlanmıştır.değişken sonuna $ifade kullanarak dönecek değerin observable olduğunu belirtme eğilimindeyiz.
  todos$: Observable<Todo[]> | undefined;
  todoSubsciption: Subscription | undefined;

  constructor(private http: HttpClient) {} // dependency injection: bır class yada component içerisine harici bir servis'in bağlanması anlamına gelir.
  ngOnDestroy(): void {
    // component domdan kalıdırılken ngOnDestroy çalışır. bu durumda component içeirsinde ne kara subscribe bağlantısı varsa hepsini performans amaçlı temizlemeliyiz. Bunu yapmak için ise unsubscribe kullanıyoruz. rxjs ile çalışırken bu kullanımlara dikkat etmeliyiz.

    this.todoSubsciption?.unsubscribe(); // yani servis bağlantısını component sayfadan kaldırılırken kopar. abone olmayı bırak.
  }

  ngOnInit(): void {
    // sayfa ilk açıldığında veri çekeceğimiz yer. reactjsdeki useEffect benzer
    this.todos$ = this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap((todos) => {
          // tap veriyi yakalıyoruz. yakalanan veri üzerinde loglama yaptık.
          console.log('not filtered todos', todos);
        }),
        map((todos) => todos.filter((x) => x.completed === true)), // geldik ve veriyi çekerken araya girip sadece completed olanları ekranda göstermiş olduk.
        tap((todos) => {
          console.log('filtered,todos', todos);
        }),
        catchError((err: any) => {
          // hata alırsak da boş bir todo dizisi gönderki ekran bozulmasın. catchError operatörü ise hata durumunda ne yapacağımız ile ilgilenen operatörümüzdür. of operatörü ile hata durumunda nasıl bir sonuç döndüreceğimiz of opertörü içerisine yazarız.
          console.log('Handling error locally and rethrowing it...', err);
          return of([]);
        })
      );

    // listener.
    this.todoSubsciption = this.todos$.subscribe((response) => {
      // todos$ olarak tanımlanmış observable tipindeki değere ulaşmak için buna abone oldum demek.
      console.log('response1', response);
    });

    this.todos$.subscribe((response) => {
      console.log('response2', response);
    });

    // pipe rxjs kütüphanesinden gelir. gelicek olan veriyi değiştirme filtereleme vs gibi veri üzerinde oynama işlemleri yapabilmemizi sağlar.
    // rxjs içerisinde operators dediğimiz bir kavram var bu kavram sayesinde filtereleme, seçme, yakalama, hata yakalama vs gibi daha fazla bir çok operasyonu yapabilmemiz sağlar. Bunu sağlayan şey ise Rxjs kütüphanesi. Ve verileri Observable tipinde döndürmesi
  }
}
