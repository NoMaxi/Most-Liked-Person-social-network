import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { NavbarService } from '../../services/navbar.service';
import { Notification } from '../../interfaces/Notification';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  notifications: Notification[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService,
    private messageService: MessageService
  ) { }

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
    }, (err) => {
      console.log(err);

      this.messageService.add({
        severity: 'error',
        summary: 'Notifications load error',
        detail: err.error.message
      });
    });
  }
}
