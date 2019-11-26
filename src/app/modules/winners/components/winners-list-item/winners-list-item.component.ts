import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners-list-item',
  templateUrl: './winners-list-item.component.html',
  styleUrls: ['./winners-list-item.component.css']
})
export class WinnersListItemComponent implements OnInit {
  @Input() imgSrc: string;

  constructor() {}

  ngOnInit() {}
}
