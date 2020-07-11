import {Injectable} from '@angular/core';
import {PostResource} from './PostResource';
import {Observable} from 'rxjs';
import {PostListModel} from './datamodel/post.list.model';
import {CreatePostModel} from '../list/models/create.post.model';
import {DeleteResult} from '../list/models/delete.result.model';

@Injectable()
export class PostService {

  constructor(private postResource: PostResource) {
  }

  public findAll(page= 1, limit = 10): Observable<PostListModel> {
    return this.postResource.findAll(page, limit);
  }

  public getSize(): any {
    return this.postResource.getSize();
  }

  public add(newPost: CreatePostModel): Observable<CreatePostModel> {
    return this.postResource.add(newPost);
  }

  public delete(postId: number): Observable<DeleteResult> {
    return this.postResource.delete(postId);
  }
}
