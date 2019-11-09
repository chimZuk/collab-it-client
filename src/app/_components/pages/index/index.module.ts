import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRouter } from './index.router';
import { JoinDialogComponent } from '../../dialogs/join-dialog/join-dialog.component';


@NgModule({
  declarations: [
    IndexComponent,
    JoinDialogComponent
  ],
  imports: [
    CommonModule,
    IndexRouter
  ]
})
export class IndexModule { }
