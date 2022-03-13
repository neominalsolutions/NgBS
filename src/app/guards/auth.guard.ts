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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('route', route);
    console.log('state', state);

    if (!this.authService.IsAuthenticated()) {
      this.router.navigateByUrl('/login');
    }

    return this.authService.IsAuthenticated();
  }
}
