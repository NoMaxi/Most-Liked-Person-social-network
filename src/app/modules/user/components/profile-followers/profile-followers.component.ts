import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { UserFollowers } from '../../interfaces/UserFollowers';
import { UserFollower } from '../../interfaces/UserFollower';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  users: UserFollower[];

  constructor(
    private globalAuthService: GlobalAuthService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers() {
    const userId = this.globalAuthService.userId;
    this.userService.getUserFollowers(userId).subscribe((data: UserFollowers) => {
      if (data.users) {
        this.users = data.users;
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'User followers load error',
        detail: err.error.message
      });
    });
  }
}
