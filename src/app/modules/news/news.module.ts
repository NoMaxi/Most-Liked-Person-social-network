import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './pages/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsListItemComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ScrollingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class NewsModule { }
