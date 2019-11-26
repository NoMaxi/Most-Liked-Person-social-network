import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../../interfaces/User';

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: User;
  activeTab: Observable<string>;
  tabsList = [
    {
      tab: 'selfies',
      prop: 'my_images',
      text: 'no. selfies'
    },
    {
      tab: 'glories',
      prop: 'glories',
      text: 'my glories'
    },
    {
      tab: 'favourites',
      prop: 'favourites',
      text: 'favourites'
    },
    {
      tab: 'followers',
      prop: 'followers',
      text: 'followers'
    },
    {
      tab: 'followings',
      prop: 'followings',
      text: 'followings'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeTab = this.route.queryParams
      .pipe(map((params) => params.tab));

    this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabsList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: 'selfies' }
        });
      }
    });
  }
}
