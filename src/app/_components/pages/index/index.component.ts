import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinDialogComponent } from '../../dialogs/join-dialog/join-dialog.component';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userData: any = {
    NickName: ""
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(function () {
      this.openJoinDialog();
    }.bind(this), 2000);
  }

  openJoinDialog(): void {
    const dialogRef = this.dialog.open(JoinDialogComponent, {
      width: '300px',
      data: { UserName: "", Password: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
