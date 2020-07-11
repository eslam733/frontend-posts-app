import {Route, Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';

export const LoginRouter: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];
