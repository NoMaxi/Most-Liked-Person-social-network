import { Component, Input, OnInit } from '@angular/core';

import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  @Input() notifications: Notification[];

  constructor() { }

  ngOnInit() {}
}
