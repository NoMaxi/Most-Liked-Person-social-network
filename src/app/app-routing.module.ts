import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', data: { withoutHeader: true } },
  { path: 'users/:id', loadChildren: './modules/user/user.module#UserModule' },
  { path: '', loadChildren: './modules/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
