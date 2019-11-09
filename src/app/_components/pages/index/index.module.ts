import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportsModule } from '../../../_modules/exports/exports.module';
import { IndexComponent } from './index.component';
import { IndexRouter } from './index.router';
import { ChatGuessesComponent } from '../../views/chat-guesses/chat-guesses.component';
import { UserScoresComponent } from '../../views/user-scores/user-scores.component';
import { DrawingFieldComponent } from '../../views/drawing-field/drawing-field.component';

@NgModule({
  declarations: [
    IndexComponent,
    ChatGuessesComponent,
    UserScoresComponent,
    DrawingFieldComponent
  ],
  imports: [
    CommonModule,
    IndexRouter,
    ExportsModule
  ]
})
export class IndexModule { }
