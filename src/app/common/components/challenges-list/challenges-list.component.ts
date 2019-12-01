import { Component, OnInit, Input } from '@angular/core';

import { ChallengeData } from '../../../modules/home/interfaces/ChallengeData';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
  @Input() challenges: ChallengeData[];

  constructor() {}

  ngOnInit() {
    console.log(this.challenges);
  }
}
