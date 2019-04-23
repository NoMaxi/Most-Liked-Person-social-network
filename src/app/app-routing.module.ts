import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './commonGuards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
