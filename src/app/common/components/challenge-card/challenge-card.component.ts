import { Component, Input, OnInit } from '@angular/core';

import { ChallengeData } from '../../../modules/home/interfaces/ChallengeData';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge: ChallengeData;

  constructor() {}

  ngOnInit() {}
}
