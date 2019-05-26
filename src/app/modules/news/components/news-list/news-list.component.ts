import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MessageService } from 'primeng/api';

import { UserService } from '../../../../common/services/user.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { News } from '../../interfaces/News';
import { NewsItem } from '../../interfaces/NewsItem';
import { User } from '../../../user/interfaces/User';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  currentUser: User;
  news: NewsItem[] = [];
  page = 1;
  count = 15;
  private gotLastBatch = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private currentUserStoreService: CurrentUserStoreService
  ) { }

  ngOnInit() {
    // this.getNewsList();
    this.currentUserStoreService.userWatcher.subscribe((data: User) => {
      if (data._id) {
        this.currentUser = data;
      }
    });
  }

  getNewsList() {
    this.userService.getNews(this.page, this.count).subscribe((data: News) => {
      if (data.news.length < this.count) {
        this.gotLastBatch = true;
      }

      if (data.news) {
        this.news = [...this.news, ...data.news];
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'News feed load error',
        detail: err.error.message
      });
    });
  }

  onScrollChange(event) {
    if (this.gotLastBatch) {
      return;
    }

    if (this.news.length === this.viewport.getRenderedRange().end) {
      this.getNewsList();
      this.page++;
    }
  }

  trackByIndex(i) {
    return i;
  }
}
