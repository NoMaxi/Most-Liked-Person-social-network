import { Component, Input, OnInit } from '@angular/core';
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
  @Input() tabType: string;
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
    const followerType = this.tabType === 'followers' ? 'followings' : 'followers';
    this.userService.getUserFollowers(userId, followerType).subscribe((data: UserFollowers) => {
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
