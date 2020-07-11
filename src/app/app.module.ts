import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BlogModule} from './blog/blog.module'
import {LoginModule} from './login/login.module';
import {AppRouteing} from './app.routeing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthModule} from './common/auth/auth.module';
import {MatIconModule} from '@angular/material/icon';
import {AuthService} from './common/auth/serviecs/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    BlogModule,
    LoginModule,
    AppRouteing,
    MatToolbarModule,
    AuthModule,
    MatIconModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
