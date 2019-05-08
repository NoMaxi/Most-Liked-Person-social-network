import { Component, Input, OnInit } from '@angular/core';

import { UserImage } from '../../interfaces/UserImage';
import { UserFavouriteImage } from '../../interfaces/UserFavouriteImage';

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() img: UserImage | UserFavouriteImage;

  constructor() {}

  ngOnInit() {}
}
