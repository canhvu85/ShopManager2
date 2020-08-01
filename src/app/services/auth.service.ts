import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from '../services/user.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router, private userService: UserService, private authService: SocialAuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
      if (!localStorage.getItem('userData')){
        this.router.navigate(['login'], { queryParams: { retUrl: route.url} });
        return false;
      }

      return true;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem('userData')){
  //     return true;
  //   }
  //   return this.authService.authState
  //     .pipe(
  //       take(1),
  //       map(user => {
  //           const isAuth = !!user;
  //           if (isAuth) {
  //               return true;
  //           } else {
  //               return this.router.createUrlTree(['/auth']);
  //           }
  //       })
  //     );
  // }
}
