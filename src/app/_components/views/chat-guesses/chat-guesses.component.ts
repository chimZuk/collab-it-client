import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
