import { Component, Input, OnInit } from '@angular/core';

import { ChallengeData } from '../../../modules/home/interfaces/ChallengeData';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge: ChallengeData;
  startDate: string;
  endDate: string;

  constructor() {}

  ngOnInit() {
    this.startDate = new Date(this.challenge.start_date).toLocaleString();
    this.endDate = new Date(this.challenge.end_date).toLocaleString();
  }
}
