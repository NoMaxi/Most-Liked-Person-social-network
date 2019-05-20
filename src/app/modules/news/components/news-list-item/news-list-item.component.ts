import { Component, Input, OnInit } from '@angular/core';

import { NewsItem } from '../../interfaces/NewsItem';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem: NewsItem;

  constructor() { }

  ngOnInit() { }
}
