import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../services/PostService';
import {Observable} from 'rxjs';
import {PostListModel} from '../services/datamodel/post.list.model';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {async} from 'rxjs/internal/scheduler/async';
import {DialogsComponent} from '../dialogs/dialogs.component';
import {MatDialog} from '@angular/material/dialog';
import {CreatePostModel} from './models/create.post.model';
import {EditPostModel} from './models/edit.post.model';
import {ConfirmComponent} from '../dialogs/confirmation/confirm.component';

@Component({
  selector: 'app-post-list',
  templateUrl: 'PostList.html',
  styleUrls: ['./PostList.css']
})

export class PostListComponent implements OnInit {
  public size = 100;
  public posts: Observable<any>;
  public postList: Observable<PostListModel>;
  public currentPage = 1;
  public currentLimit = 10;
  displayedColumns: string[] = ['id', 'title', 'subtitle', 'img url', 'action'];


  constructor(private postService: PostService, private dialog: MatDialog) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const siz = this.postService.getSize();
    siz.subscribe(res => {
      this.size = res as number;
    });
    this.posts = this.postService.findAll();
    this.postsToView();
  }

  onchange(event): any {
    this.currentPage = event.pageIndex + 1;
    this.currentLimit = event.pageSize;
    this.posts = this.postService.findAll(event.pageIndex + 1, event.pageSize);
    this.postsToView();
  }

  openDialog(): any {
    const ref = this.dialog.open(DialogsComponent, {
      width: '80%'
    });

    ref.afterClosed().subscribe((res: number) => {
      if (res) {
        this.size++;
        this.posts = this.postService.findAll(this.currentPage, this.currentLimit);
        this.postsToView();
      }
    });
  }

  postsToView(postId = -1): any {
    this.posts.subscribe(res => {
      if (res.items.id !== postId) {
        this.postList = res.items as Observable<PostListModel>;
      }
    });
  }

  postEdit(editPost: EditPostModel): any {
    const ref = this.dialog.open(DialogsComponent, {
      width: '80%',
      data: editPost
    });
  }

  delete(postId: number): any {
    // this.postService.delete(postId);
    const ref = this.dialog.open(ConfirmComponent, {
      width: '80%%',
      data: postId
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.postsToView(postId);
        this.size--;
      }
    });

  }
}

