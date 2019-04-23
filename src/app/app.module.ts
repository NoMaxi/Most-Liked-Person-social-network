import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Создать глобальный сервис GlobalAuth
// 1.1 get isLogin: получать из ls токен и возвращать true или false
// 2. Создать AuthGuard
// 2.1 Подключаете AuthGuard в app-routing.module
// 2.2 Подключаете сервис GlobalAuth и в методе CanActivate вызываете геттер isLogin и если оне вернет true то возвращаете true если false то редирект на логин
// 3. В компоненте login в ngOnInit проверить не залогинен ли пользователь через GlobalAuth и геттер isLogin

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
