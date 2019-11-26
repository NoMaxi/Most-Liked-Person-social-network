import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  authUserId: string;
  id: string;

  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private currentUserStoreService: CurrentUserStoreService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.getUser();
    this.currentUserStoreService.userWatcher.subscribe((user: User) => {
      if (user._id) {
        this.user = user;
      }
    });
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe((user: User) => {
      if (user._id) {
        this.user = user;
      }
    });
  }

  uploadCover(cover) {
    this.userService.uploadCover(cover).subscribe((res) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }
}
