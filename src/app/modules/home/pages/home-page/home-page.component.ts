import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { MessageService } from 'primeng/api';

import { HomeService } from '../../services/home.service';
import { HomePageData } from '../../interfaces/HomePageData';
import { ChallengeData } from '../../interfaces/ChallengeData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homePageData: HomePageData;
  challenges: ChallengeData[];
  isLoading = true;

  constructor(
    private homeService: HomeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, { challenges }]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
      }, (err) => {
        console.error(err);

        this.messageService.add({
          severity: 'error',
          summary: 'Home page data load error',
          detail: err.error.message
        });
      }, () => {
        this.isLoading = false;
      });
  }
}
