import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.css']
})
export class UserScoresComponent implements OnInit {

  @Input() players: any;
  @Input() isMobile: any;

  constructor() { }

  ngOnInit() {
  }

}
