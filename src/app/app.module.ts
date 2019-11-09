import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './_modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportsModule } from './_modules/exports/exports.module';

import { JoinDialogComponent } from './_components/dialogs/join-dialog/join-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinDialogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    ExportsModule
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
