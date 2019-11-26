import { Component, OnInit, Input } from '@angular/core';

import { HomePageData } from '../../interfaces/HomePageData';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data: HomePageData;

  constructor() {}

  ngOnInit() {}
}
