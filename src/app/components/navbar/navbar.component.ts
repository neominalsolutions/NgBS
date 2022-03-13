import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Menu } from './menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService], // componente auth servisi bağla
})
export class NavbarComponent implements OnInit {
  email: string = '';

  @Input() menuList: Menu[] = [
    {
      title: 'Anasayfa',
      url: '/',
    },
    {
      title: 'Yapılacaklar',
      url: '/todos',
    },
    {
      title: 'Makaleler',
      url: 'posts',
    },
    {
      title: 'Oturum Aç',
      url: 'login',
    },
  ];

  // bazen servisler hem html hemde ts dosyasında gösteririz. böyle durumlarda servislermizi public tercih edebiliriz.AuthService htmlde kullanacağımızdan dolayı public tercih ettik.
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.IsAuthenticated()) {
      // eğer loginsem. birr kere login menüsünü filtrele
      this.menuList = [...this.menuList.filter((x) => x.url != 'login')]; // login menusunu eğer oturum açıksa filtrelemem lazım
      // loginsem email bilgimi localstorage dan çek dedim
      this.email = this.authService.UserEmail();
    }
  }

  logOut() {
    // local storage temizle
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    // beni login'e yönlendir dedim.
    window.location.href = '/login';
    // nativagetByUrl yerine menu güncellensin diye window.location.href ile yönledirme yaptık. zaten u tarz yönlendirmeleri login ve logout için yapabiliriz. hatta daha doğru olur.
    // navigateByUrl ile de yapılabilir. Bu durumda global state mekanizması olan redux kullanılmalıdır.
  }
}
