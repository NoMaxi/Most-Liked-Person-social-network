import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { NewsRoutingModule } from './news-routing.module';
import { ImgLoaderDirective } from '../../common/directives/img-loader.directive';
import { NewsComponent } from './pages/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsListItemComponent,
    ImgLoaderDirective
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ScrollingModule
  ]
})
export class NewsModule { }
