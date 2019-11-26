import { Component, Input, OnInit } from '@angular/core';

import { UserAchievement } from '../../interfaces/UserAchievement';

@Component({
  selector: 'app-glory-preview',
  templateUrl: './glory-preview.component.html',
  styleUrls: ['./glory-preview.component.css']
})
export class GloryPreviewComponent implements OnInit {
  @Input() achievement: UserAchievement;

  constructor() {}

  ngOnInit() {}
}
