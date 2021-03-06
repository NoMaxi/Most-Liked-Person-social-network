import { Component, Input, OnInit } from '@angular/core';

import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: Notification;

  constructor() {}

  ngOnInit() {}
}
