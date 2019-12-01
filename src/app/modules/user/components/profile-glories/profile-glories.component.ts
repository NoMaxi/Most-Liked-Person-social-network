import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { UserAchievement } from '../../interfaces/UserAchievement';
import { UserGlories } from '../../interfaces/UserGlories';

@Component({
  selector: 'app-profile-glories',
  templateUrl: './profile-glories.component.html',
  styleUrls: ['./profile-glories.component.css']
})
export class ProfileGloriesComponent implements OnInit {
  @Output() achievements: UserAchievement[];

  constructor(
    private globalAuthService: GlobalAuthService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getGlories();
  }

  getGlories() {
    const userId = this.globalAuthService.userId;
    this.userService.getUserGlories(userId).subscribe((data: UserGlories) => {
      if (data.achievements) {
        this.achievements = data.achievements;
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'User photos load error',
        detail: err.error.message
      });
    });
  }
}
