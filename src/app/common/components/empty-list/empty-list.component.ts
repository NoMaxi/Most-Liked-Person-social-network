import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.css']
})
export class EmptyListComponent implements OnInit {
  @Input() text;

  constructor() {}

  ngOnInit() {}
}
