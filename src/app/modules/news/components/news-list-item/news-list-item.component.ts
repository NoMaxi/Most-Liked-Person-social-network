import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { UserService } from '../../../../common/services/user.service';
import { NewsItem } from '../../interfaces/NewsItem';
import { UserFollowServerAnswer } from '../../../user/interfaces/UserFollowServerAnswer';
import { User } from '../../../user/interfaces/User';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input() currentUser: User;
  isCurrentUser: boolean;
  isFollowed: boolean;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.isCurrentUser = this.newsItem.owner._id === this.currentUser._id;
    this.isFollowed = this.currentUser.followings
      .some((followingId) => followingId === this.newsItem.owner._id);

  }

  onFollowBtnClick() {
    this.userService.userFollowToggle(this.newsItem.owner._id).subscribe((res: UserFollowServerAnswer) => {
      if (!res.error) {
        this.isFollowed = !this.isFollowed;
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
