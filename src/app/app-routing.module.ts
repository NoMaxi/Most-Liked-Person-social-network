import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', data: { withoutHeader: true } },
  { path: 'users/:id', loadChildren: './modules/user/user.module#UserModule' },
  { path: 'winners', loadChildren: './modules/winners/winners.module#WinnersModule' },
  { path: 'news', loadChildren: './modules/news/news.module#NewsModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
