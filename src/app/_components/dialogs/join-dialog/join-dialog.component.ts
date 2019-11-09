import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  UserName: string;
  Password: string;
}


@Component({
  selector: 'join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.css']
})
export class JoinDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
