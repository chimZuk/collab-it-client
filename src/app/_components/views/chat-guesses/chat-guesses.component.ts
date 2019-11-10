import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'chat-guesses',
  templateUrl: './chat-guesses.component.html',
  styleUrls: ['./chat-guesses.component.css']
})
export class ChatGuessesComponent implements OnInit {

  @Input() authorized: any;
  @Input() userData: any;
  @Input() time: any;

  message: any = {
    text: "",
    senderName: "chimZuk",
    time: ""
  }

  messages: any = [
  ]


  constructor(
    private socket: SocketService
  ) { }

  ngOnInit() {
    this.socket
      .getMessages()
      .subscribe((message: any) => {
        this.messages.push(message);
        setTimeout(function () {
          document.getElementById('messages').scrollBy(0, 9999999);
        }, 1)
      });
    this.socket
      .getMessageHotness()
      .subscribe((message: any) => {
        for (var i = 0; i < this.messages.length; i++) {
          if (this.messages[i].messageID == message.messageID) {
            this.messages[i] = message;
          }
        }
      });
  }

  sendMessage() {
    if (this.message.text.length > 0) {
      this.message.senderName = this.userData.UserName;
      this.message.time = this.time;
      this.socket.sendMessage(this.message);
      this.message.text = "";
    }
  }

  messageHotness(message, val) {
    message.hotness = val;
    this.socket.messageHotStatus(message);
  }

}
