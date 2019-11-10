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

  players: any = [];

  constructor(
    public dialog: MatDialog,
    private socket: SocketService
  ) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit() {
    console.log(localStorage.getItem("user"));
    if (JSON.parse(localStorage.getItem("user")) != null) {
      if (JSON.parse(localStorage.getItem("user")).UserName) {
        this.userData = JSON.parse(localStorage.getItem("user"));
      } else {
        localStorage.removeItem("user");
      }
    }

    setTimeout(function () {
      this.openJoinDialog();
    }.bind(this), 700);

    this.socket
      .getTime()
      .subscribe((message: any) => {
        this.time = message;
      });
    this.socket
      .getUsers()
      .subscribe((players: any) => {
        console.log(players)
        this.players = players;
      });
    this.socket
      .getJoined()
      .subscribe((data: any) => {
        console.log(data)
        this.players = data.players;
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
        this.players = result.players;
        this.userData = result.userData;
        localStorage.setItem("user", JSON.stringify(result.userData));
      }
      console.log(result);
    });
  }

}
