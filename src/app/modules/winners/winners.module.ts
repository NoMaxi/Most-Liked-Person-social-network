import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { WinnersRoutingModule } from './winners-routing.module';
import { ImgLoaderDirective } from '../../common/directives/img-loader.directive';
import { WinnersComponent } from './pages/winners/winners.component';
import { WinnersCoverComponent } from './components/winners-cover/winners-cover.component';
import { WinnersListComponent } from './components/winners-list/winners-list.component';
import { WinnersListItemComponent } from './components/winners-list-item/winners-list-item.component';

@NgModule({
  declarations: [
    WinnersComponent,
    WinnersCoverComponent,
    WinnersListComponent,
    WinnersListItemComponent,
    ImgLoaderDirective
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    ScrollingModule
  ],
  providers: []
})
export class WinnersModule { }
