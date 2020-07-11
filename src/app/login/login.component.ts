import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from '../user/usermodel/user.model';
import {AuthService} from '../common/auth/serviecs/auth.service';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html.html',
  styleUrls: ['login.css.css']
})

export class LoginComponent implements OnInit {
  public user = {} as UserModel;
  public isLoad = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if(this.authService.isAuth()) this.router.navigate(['blog/list']);
  }

  submit(f: NgForm): any {
    if (f.valid) {
      this.isLoad = true;
      this.authService.login(this.user).pipe(
        finalize(() => {
          this.isLoad = false;
        })
      ).subscribe(val => {
        if (val) {
          this.router.navigate(['blog/list']);
        } else {
          alert('username or password incorrect');
        }
      });
    }
  }

  addNewUser(f: NgForm): any {
    if (f.valid) {
      this.isLoad = true;
      this.authService.signup(this.user).pipe(
        finalize(() => this.isLoad = false)
      ).subscribe(val => {
        if (val) {
          alert('user has been added');
        } else {
          alert('user is exists');
        }
      });
    }
  }
}
