import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './_modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { JoinDialogComponent } from './_components/dialogs/join-dialog/join-dialog.component';
import { ChatGuessesComponent } from './_components/views/chat-guesses/chat-guesses.component';



@NgModule({
  declarations: [
    AppComponent,
    JoinDialogComponent,
    ChatGuessesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    JoinDialogComponent
  ]
})
export class AppModule { }
