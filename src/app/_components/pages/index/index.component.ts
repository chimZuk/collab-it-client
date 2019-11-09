import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinDialogComponent } from '../../dialogs/join-dialog/join-dialog.component';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openJoinDialog(): void {
    const dialogRef = this.dialog.open(JoinDialogComponent, {
      width: '250px',
      data: { UserName: "", Password: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
