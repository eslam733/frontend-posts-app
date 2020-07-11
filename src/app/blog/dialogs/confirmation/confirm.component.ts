import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {PostService} from '../../services/PostService';
import {DeleteResult} from '../../list/models/delete.result.model';

@Component({
  selector: 'app-confirm',
  template: `
    <div class="d-flex flex-column justify-content-center col-sm-12 col-md-10">
      <h1 mat-dialog-title>Confirmation</h1>
      <div mat-dialog-content>
        <p>Are your want delete this post?!</p>
      </div>
      <div mat-dialog-actions class="d-flex flex-md-row flex-sm-column">
        <button mat-button color="warn" (click)="delete()">Delete</button>
        <button mat-button [mat-dialog-close] cdkFocusInitial>Cancel</button>
      </div>
    </div>
  `
})

export class ConfirmComponent implements OnInit {

  constructor(private postService: PostService, private refdialog: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any = null) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

   delete(): any {
    this.handleBack(this.postService.delete(this.data));
  }

  handleBack(res: Observable<DeleteResult>): any {
    res.subscribe((data) => {
      this.refdialog.close(data.affected);
    });
  }
}
