import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { UserService } from '../../../../common/services/user.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { NewsItem } from '../../interfaces/NewsItem';
import { UserFollowServerAnswer } from '../../../user/interfaces/UserFollowServerAnswer';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem: NewsItem;
  isCurrentUser: boolean;
  isFollowed: boolean;
  timeSinceUpload: string;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private currentUserStoreService: CurrentUserStoreService,
    private globalAuthService: GlobalAuthService
  ) {}

  ngOnInit() {
    this.isCurrentUser = this.newsItem.owner._id === this.globalAuthService.userId;
    console.log('Is current User', this.isCurrentUser);
    console.log(this.newsItem.owner);
    // @ts-ignore
    this.isFollowed = this.currentUserStoreService.info.followings
      .some((followingId) => followingId === this.newsItem.owner._id);
    const msSinceUpload = Date.now() - new Date(this.newsItem.date).valueOf();
    this.timeSinceUpload = msSinceUpload < 6e4 ? 'Just now'
      : msSinceUpload < 3.6e6 ?
        `${(msSinceUpload / 6e4).toFixed()} minutes`
        : msSinceUpload < 8.64e7 ?
          `${(msSinceUpload / 3.6e6).toFixed()} hours`
          : `${(msSinceUpload / 8.64e7).toFixed()} days`;
  }

  onBtnClick() {
    this.userService.userFollowToggle(this.newsItem.owner._id).subscribe((res: UserFollowServerAnswer) => {
      if (!res.error) {
        this.isFollowed = !this.isFollowed;
        this.currentUserStoreService.initCurrentUser();

        this.messageService.add({
          severity: this.isFollowed ? 'success' : 'warn',
          summary: 'Follower status',
          detail: this.isFollowed ? `You are following ${this.newsItem.owner.full_name}` : `You are not following ${this.newsItem.owner.full_name}`
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
