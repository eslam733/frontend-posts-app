import {Route, Router, RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './list/PostListComponent';
import {BlogGuards} from './guards/blog.guards';

export const BlogRouter: Route[] = [
  {
    path: 'blog', children: [
      {path: 'list', component: PostListComponent, canActivate: [BlogGuards]}
    ]
  }
];

