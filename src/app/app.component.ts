import {Component, OnInit} from '@angular/core';
import {AuthService} from './common/auth/serviecs/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router) {
  }

  logout(): any {
    this.authService.cleanToken();
    this.authService.isLogin = false;
    this.router.navigate(['login']);
  }
}
