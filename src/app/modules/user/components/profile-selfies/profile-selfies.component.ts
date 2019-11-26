import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { GlobalAuthService } from '../../../../common/services/global-auth.service';
import { UserService } from '../../../../common/services/user.service';
import { CurrentUserStoreService } from '../../../../common/services/current-user-store.service';
import { UserImages } from '../../interfaces/UserImages';
import { UserImage } from '../../interfaces/UserImage';

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images: UserImage[];

  constructor(
    private globalAuthService: GlobalAuthService,
    private userService: UserService,
    private messageService: MessageService,
    private currentUserStoreService: CurrentUserStoreService
  ) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    const userId = this.globalAuthService.userId;
    this.userService.getUserImages(userId).subscribe((data: UserImages) => {
      if (data.images) {
        this.images = data.images;
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'User photos load error',
        detail: err.error.message
      });
    });
  }

  loadPhotos(input) {
    const files = Array.from(input.files);
    this.userService.uploadPhotos(files).subscribe((res) => {
      if (!res.error) {
        this.getImages();
        this.currentUserStoreService.initCurrentUser();
        this.messageService.add({
          severity: 'success',
          summary: files.length === 1 ? 'Photo upload' : 'Photos upload',
          detail: files.length === 1 ? 'Photo has been successfully uploaded' : 'Photos have been successfully uploaded'
        });
      }
    }, (err) => {
      console.error(err);
      this.messageService.add({
        severity: 'error',
        summary: 'Photos upload error',
        detail: err.error.message
      });
    });
  }
}
