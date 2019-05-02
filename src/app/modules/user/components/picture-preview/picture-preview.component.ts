import { Component, Input, OnInit } from '@angular/core';

import { UserImage } from '../../interfaces/UserImage';

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() img: UserImage;

  constructor() { }

  ngOnInit() {}
}
