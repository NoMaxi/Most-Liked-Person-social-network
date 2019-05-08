import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../../../../common/services/user.service';
import { MessageService } from 'primeng/api';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { UserFollower } from '../../interfaces/UserFollower';
import { UserFollowServerAnswer } from '../../interfaces/UserFollowServerAnswer';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: UserFollower;
  isFollowed = true;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private currentUserStoreService: CurrentUserStoreService
  ) {}

  ngOnInit() {
    // @ts-ignore
    this.isFollowed = this.currentUserStoreService.info.followings
      .some((followingId) => followingId === this.user._id);
  }

  onBtnClick() {
    this.userService.userFollowToggle(this.user._id).subscribe((res: UserFollowServerAnswer) => {
      if (!res.error) {
        this.isFollowed = !this.isFollowed;
        this.currentUserStoreService.initCurrentUser();

        this.messageService.add({
          severity: this.isFollowed ? 'success' : 'warn',
          summary: 'Follower status',
          detail: this.isFollowed ? `You are following ${this.user.full_name}` : `You are not following ${this.user.full_name}`
        });
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'Follower status error',
        detail: err.error.message
      });
    });
  }
}
