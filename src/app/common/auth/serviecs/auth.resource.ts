import {Injectable} from '@angular/core';
import {ApiConfig} from '../../../blog/api.config';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../user/usermodel/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class AuthResource {

  private readonly url = ApiConfig.url + '/posts/auth';

  constructor(private  httpClient: HttpClient) {
  }

  public login(user: UserModel): Observable<UserModel> {
    const url2 = this.url + '/check';
    return  this.httpClient.post(url2, user) as Observable<UserModel>;
  }

  public signup(user: UserModel): Observable<UserModel> {
    const url2 = this.url + '/new';
    return this.httpClient.post(url2, user) as Observable<UserModel>;
  }

}
