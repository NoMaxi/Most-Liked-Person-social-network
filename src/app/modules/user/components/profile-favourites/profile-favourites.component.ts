import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { UserFavouriteImage } from '../../interfaces/UserFavouriteImage';
import { UserFavourites } from '../../interfaces/UserFavourites';

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  favourites: UserFavouriteImage[];

  constructor(
    private globalAuthService: GlobalAuthService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites() {
    const userId = this.globalAuthService.userId;
    this.userService.getUserFavourites(userId).subscribe((data: UserFavourites) => {
      if (data.images) {
        this.favourites = data.images;
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'User favourites load error',
        detail: err.error.message
      });
    });
  }
}
