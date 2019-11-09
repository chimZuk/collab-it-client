import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportsModule } from '../../../_modules/exports/exports.module';
import { IndexComponent } from './index.component';
import { IndexRouter } from './index.router';
import { ChatGuessesComponent } from '../../views/chat-guesses/chat-guesses.component';
import { UserScoresComponent } from '../../views/user-scores/user-scores.component';
import { DrawingFieldComponent } from '../../views/drawing-field/drawing-field.component';
import { SocketService } from '../../../_services/socket/socket.service';

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
  ],
  providers: [
    SocketService
  ]
})
export class IndexModule { }
