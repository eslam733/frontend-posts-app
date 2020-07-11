import {Injectable} from '@angular/core';
import {ApiConfig} from '../api.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostListModel} from './datamodel/post.list.model';
import {map} from 'rxjs/operators';
import {CreatePostModel} from '../list/models/create.post.model';
import {DeleteResult} from '../list/models/delete.result.model';
import {async} from '@angular/core/testing';

@Injectable()
export class PostResource {
  private readonly url = ApiConfig.url + '/posts';

  constructor(private  httpClient: HttpClient) {
  }

  public findAll(page, limit): Observable<any> {
    const url2 = this.url + '?page=' + page + '&limit=' + limit;
    return this.httpClient.get(url2);
  }

  public add(newPost: CreatePostModel): Observable<CreatePostModel> {
    return this.httpClient.post(this.url, newPost) as Observable<CreatePostModel>;
  }

  public getSize(): any {
    const url2 = this.url + '/size';
    return this.httpClient.get(url2);
  }

  public delete(postId: number): Observable<DeleteResult> {
    const url2 = this.url + `/${postId}`;
    return this.httpClient.get(url2) as Observable<DeleteResult>;
  }
}
