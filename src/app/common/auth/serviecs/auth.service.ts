import {Injectable} from '@angular/core';
import {AuthResource} from './auth.resource';
import {Router} from '@angular/router';
import {UserModel} from '../../../user/usermodel/user.model';
import {Observable, of, Subscribable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import {TokenModel} from '../datamodel/token.model';


@Injectable()
export class AuthService {

  private readonly AUTH_KEY_TOKEN = 'DHJIIW2392./CZ92';

  public isLogin = false;

  constructor(private readonly auturesource: AuthResource,
              private readonly router: Router) {
  }

  public login(user: UserModel): Observable<UserModel> {
    const res = this.auturesource.login(user);
    res.subscribe(value => {
      if (value) {
        this.storeToken({expire: 16000, token: 'JDNIADN1321//23WW!@@3'});
      }
    });
    return res;
  }

  private logout(): any {
    this.cleanToken();
    this.router.navigate(['login']);
  }

  public cleanToken(): any {
    localStorage.removeItem(this.AUTH_KEY_TOKEN);
  }

  private storeToken(authToken: TokenModel): any {
    localStorage.setItem(this.AUTH_KEY_TOKEN, JSON.stringify(authToken));
  }

  private loadToken(): TokenModel {
    try {
      return JSON.parse(localStorage.getItem(this.AUTH_KEY_TOKEN));
    } catch (e) {
      console.error('bad json');
    }
  }

  public isAuth(): boolean {
    if (localStorage.getItem(this.AUTH_KEY_TOKEN)) {
      this.isLogin = true;
      return true;
    } else {
      this.isLogin = false;
      return false;
    }
  }

  public signup(user: UserModel): Observable<UserModel> {
    return this.auturesource.signup(user);
  }
}
