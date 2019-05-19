import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { ProfileGloriesComponent } from './components/profile-glories/profile-glories.component';
import { GloryPreviewComponent } from './components/glory-preview/glory-preview.component';
import { ProfileFavouritesComponent } from './components/profile-favourites/profile-favourites.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowingsComponent } from './components/profile-followings/profile-followings.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    ProfileCoverComponent,
    ProfileControlsComponent,
    ProfileTabsContainerComponent,
    ProfileSelfiesComponent,
    PicturePreviewComponent,
    ProfileGloriesComponent,
    GloryPreviewComponent,
    ProfileFavouritesComponent,
    ProfileFollowersComponent,
    ProfileFollowingsComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class UserModule { }
