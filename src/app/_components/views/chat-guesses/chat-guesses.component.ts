import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'chat-guesses',
  templateUrl: './chat-guesses.component.html',
  styleUrls: ['./chat-guesses.component.css']
})
export class ChatGuessesComponent implements OnInit {

  messages: any = [
    {
      text: "Apple",
      senderName: "chimZuk",
      time: "1:22"
    }
  ]


  constructor(
    private socket: SocketService
  ) { }

  ngOnInit() {

  }

  sendMessage() {
    console.log("trying to send");
    this.socket.connect();
  }

}
