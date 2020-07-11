import {NgModule} from '@angular/core';
import {PostListComponent} from './PostListComponent';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogsComponent} from '../dialogs/dialogs.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [MatCardModule, FormsModule, MatProgressBarModule, MatInputModule, MatDialogModule, MatButtonModule, CommonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatTooltipModule],
  exports: [PostListComponent,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [PostListComponent, DialogsComponent],
  entryComponents: [DialogsComponent],
  providers: [],
})
export class PostListModule {

}

