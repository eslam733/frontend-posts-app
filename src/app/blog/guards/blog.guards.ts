import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../common/auth/serviecs/auth.service';

@Injectable()
export class BlogGuards implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const isUserAuthorized = this.authService.isAuth();
    if (!isUserAuthorized) {
      this.router.navigate(['login']);
    }
    return of(isUserAuthorized);
  }
}
