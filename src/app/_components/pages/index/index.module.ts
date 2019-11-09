import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRouter } from './index.router';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRouter
  ]
})
export class IndexModule { }
