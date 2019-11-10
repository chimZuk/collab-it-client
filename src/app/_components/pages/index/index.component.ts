import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinDialogComponent } from '../../dialogs/join-dialog/join-dialog.component';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  authorized: boolean = false;

  time: number = 0;

  userData: any = {
    UserName: "",
    Password: ""
  }

  constructor(
    public dialog: MatDialog,
    private socket: SocketService
  ) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit() {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.userData = JSON.parse(localStorage.getItem("user"));
    }
    setTimeout(function () {
      this.openJoinDialog();
    }.bind(this), 700);

    this.socket
      .getTime()
      .subscribe((message: any) => {
        this.time = message;
      });
  }

  openJoinDialog(): void {
    const dialogRef = this.dialog.open(JoinDialogComponent, {
      width: '300px',
      data: this.userData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorized = true;
        this.userData = result;
        localStorage.setItem("user", JSON.stringify(result));
      }
      console.log(result);
    });
  }

}
