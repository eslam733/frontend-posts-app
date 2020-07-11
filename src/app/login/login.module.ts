import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {LoginRouter} from './login.router';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(LoginRouter), MatCardModule, MatButtonModule, MatInputModule, FormsModule, MatProgressBarModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
