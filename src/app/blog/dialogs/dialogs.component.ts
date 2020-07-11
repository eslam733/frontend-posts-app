import {Component, Inject, OnInit} from '@angular/core';
import {CreatePostModel} from '../list/models/create.post.model';
import {EditPostModel} from '../list/models/edit.post.model';
import {PostService} from '../services/PostService';
import {finalize} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialogs.html'
})

export class DialogsComponent implements OnInit {

  public postModel: CreatePostModel | EditPostModel = {} as CreatePostModel;
  public isLoad = false;
  public isEdit = false;

  constructor(private postService: PostService, private refdialog: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any = null) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (this.data !== null) {
      this.isEdit = true;
      this.postModel = this.data;
    }
  }

  submit(from: any): any {
    if (from.valid) {
      this.isLoad = true;
      this.handleBack(this.isEdit ? this.postService.add(this.postModel as EditPostModel) : this.postService.add(this.postModel as CreatePostModel));
    }
  }

  handleBack(res: Observable<CreatePostModel>): any {
    res.pipe(
      finalize(() => {
        this.isLoad = false;
      })
    ).subscribe((res: CreatePostModel | EditPostModel) => {
      this.refdialog.close(true);
    });
  }

  close(): any{
    this.refdialog.close(false);
  }
}
