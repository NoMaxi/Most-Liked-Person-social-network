import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    NavbarComponent,
    NotificationsListComponent,
    NotificationItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [NavbarService]
})
export class NavbarModule { }
