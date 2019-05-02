import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { NavbarService } from '../../services/navbar.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  notifications: Notification[];
  unreadNotifications: Notification[];
  userAvatar: string;
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService,
    private messageService: MessageService,
    private currentUser: CurrentUserStoreService
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    ).subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    
    this.navbarService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
      this.unreadNotifications = data.filter((item) => !item.readed);
    }, (err) => {
      console.error(err);

      this.messageService.add({
        severity: 'error',
        summary: 'Notifications load error',
        detail: err.error.message
      });
    });

    this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
  }
}
