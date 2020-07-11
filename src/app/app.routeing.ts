import {NgModel} from '@angular/forms';
import {Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routers: Routes = [];

@NgModule(
  {
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
  }
)

export class AppRouteing {

}
