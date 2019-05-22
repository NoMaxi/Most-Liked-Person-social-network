import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MessageService } from 'primeng/api';

import { UserService } from '../../../../common/services/user.service';
import { News } from '../../interfaces/News';
import { NewsItem } from '../../interfaces/NewsItem';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  news: NewsItem[] = [];
  page = 1;
  count = 15;
  private gotLastBatch = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() { }

  getNewsList() {
    this.userService.getNews(this.page, this.count).subscribe((data: News) => {
      if (data.news.length < this.count) {
        this.gotLastBatch = true;
      }

      if (data.news) {
        this.news = [...this.news, ...data.news];
        // this.news = this.news.concat(data.news);
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
