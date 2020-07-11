import {NgModule} from '@angular/core';
import {AuthService} from './serviecs/auth.service';
import {AuthResource} from './serviecs/auth.resource';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [AuthService, AuthResource],
})
export class AuthModule {
}
