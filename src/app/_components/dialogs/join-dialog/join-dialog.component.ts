import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocketService } from '../../../_services/socket/socket.service';

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

  loading: boolean = false;
  IsRegistering: boolean = false;

  userData: any = {
    UserName: "",
    Password: ""
  }

  constructor(
    public dialogRef: MatDialogRef<JoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private socket: SocketService
  ) { }

  spectate(): void {
    this.dialogRef.close();
  }

  join(): void {
    this.socket.userJoin(this.userData);
    console.log(this.userData);
    this.loading = true;
    let sub = this.socket
      .getJoined()
      .subscribe((user: any) => {
        sub.unsubscribe();
        this.dialogRef.close(user.userData);
        console.log(user);
        this.loading = false;
      });

  }

  ngOnInit(): void {
    this.userData = this.data;
  }

}
