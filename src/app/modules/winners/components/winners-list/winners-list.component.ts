import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { UserService } from '../../../../common/services/user.service';
import { Winners } from '../../interfaces/Winners';
import { Winner } from '../../interfaces/Winner';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.css']
})
export class WinnersListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  winners: Winner[] = [];
  part = 1;
  limit = 15;
  private gotLastBatch = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  getWinnersList() {
    this.userService.getWinners(this.part, this.limit).subscribe((data: Winners) => {
      if (data.winners.length < this.limit) {
        this.gotLastBatch = true;
      }

      if (data.winners) {
        // check if elements of received winners array have the member_id.images[0]
        // property - is needed due to server database error
        const correctWinners = [];
        data.winners.forEach((winner) => {
          if (winner.member_id.images[0]) {
            correctWinners.push(winner);
          }
        });
        this.winners = [...this.winners, ...correctWinners];
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'Winners load error',
        detail: err.error.message
      });
    });
  }

  onScrollChange(event) {
    if (this.gotLastBatch) {
      return;
    }

    if (this.winners.length === this.viewport.getRenderedRange().end) {
      this.getWinnersList();
      this.part++;
    }
  }

  trackByIndex(i) {
    return i;
  }
}
