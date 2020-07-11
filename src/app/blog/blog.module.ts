import {NgModule} from '@angular/core';
import {PostResource} from './services/PostResource';
import {PostService} from './services/PostService';
import {PostListModule} from './list/PostListModule';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmComponent} from './dialogs/confirmation/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogsComponent} from './dialogs/dialogs.component';
import {RouterModule} from '@angular/router';
import {BlogRouter} from './blog.router';
import {BlogGuards} from './guards/blog.guards';



// @ts-ignore
@NgModule({
  imports: [PostListModule, HttpClientModule, MatDialogModule, RouterModule.forChild(BlogRouter)],
  exports: [PostListModule],
  declarations: [ConfirmComponent],
  entryComponents: [ConfirmComponent],
  providers: [PostResource, PostService, BlogGuards],
})
export class BlogModule { }
