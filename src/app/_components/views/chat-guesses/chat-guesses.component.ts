import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'chat-guesses',
  templateUrl: './chat-guesses.component.html',
  styleUrls: ['./chat-guesses.component.css']
})
export class ChatGuessesComponent implements OnInit {

  @Input() authorized: string;

  message: any = {
    text: "",
    senderName: "chimZuk",
    time: "1:22"
  }

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
    this.socket
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        setTimeout(function () {
          document.getElementById('messages').scrollBy(0, 9999999);
        }, 1)
      });
  }

  sendMessage() {
    if (this.message.text.length > 0) {
      this.socket.sendMessage(this.message);
      this.message.text = "";
    }
  }

}
