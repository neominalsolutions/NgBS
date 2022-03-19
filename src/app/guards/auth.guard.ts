import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// guardlarda angular bir servis mantıklı çalışan yapılar. o yüzden bunlar @Injectable olarak işaretlenmişlerdir.
// sadece page componentler için guard mekanizmasını kullanabiliriz. components klasöründeki componentler için böyle bir ihtiyacımız yoksa.
// link'e erişip erişemiyeceğimizin kontrolü sağlar.

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // component istek yapıldığında canActivate methodumuz araya girip bir kontrol sağlıyor.
  // true yada false değer döndürüp true ise süreç devanm ediyor sayfa açılıyor false ise süreç sonlanıp ya bir sayfa yönledirme yapılıyor yada ilgili sayfa yönlendirme yapılmadan sayfada kalınıyor. sayfaya yetkisi yoksa yani kullanıcı authenticated değilse kimliği doğrulanmamış ise bir accessToken sahip değilse bu durumda bu özel sayfaya login olmadan giremeyeceğin login sayfasına yönlendirme yaptık.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('guard düştü');

    if (!this.authService.IsAuthenticated()) {
      this.router.navigateByUrl('/login');
    }

    // if (this.authService.IsAuthenticated()== false) {
    //   this.router.navigateByUrl('/login');
    // }

    return true;
  }
}
