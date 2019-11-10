import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportsModule } from '../../../_modules/exports/exports.module';
import { IndexComponent, PopupSnack } from './index.component';
import { IndexRouter } from './index.router';
import { ChatGuessesComponent } from '../../views/chat-guesses/chat-guesses.component';
import { UserScoresComponent } from '../../views/user-scores/user-scores.component';
import { DrawingFieldComponent } from '../../views/drawing-field/drawing-field.component';
import { SocketService } from '../../../_services/socket/socket.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    IndexComponent,
    ChatGuessesComponent,
    UserScoresComponent,
    DrawingFieldComponent,
    PopupSnack
  ],
  imports: [
    CommonModule,
    IndexRouter,
    ExportsModule
  ],
  providers: [
    SocketService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 10000 } }
  ],
  entryComponents: [
    PopupSnack
  ]
})
export class IndexModule { }
