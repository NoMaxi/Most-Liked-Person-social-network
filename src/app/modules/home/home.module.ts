import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { LoaderModule } from '../loader/loader.module';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './services/home.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import { ChallengeCardComponent } from '../../common/components/challenge-card/challenge-card.component';
import { ChallengesListComponent } from '../../common/components/challenges-list/challenges-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengesListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    LoaderModule,
    SharedModule
  ],
  providers: [HomeService]
})
export class HomeModule {}
