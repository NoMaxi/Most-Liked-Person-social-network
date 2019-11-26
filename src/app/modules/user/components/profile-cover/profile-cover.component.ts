import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.css']
})
export class ProfileCoverComponent implements OnInit {
  @Input() cover;
  @Input() isCurrentUser;
  @Output('upload') upload = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  loadCover(input) {
    const [newCover] = input.files;
    if (newCover) {
      this.upload.emit(newCover);
    }
  }
}
