import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgLoaderDirective } from './directives/img-loader.directive';

@NgModule({
  declarations: [ImgLoaderDirective],
  exports: [
    ImgLoaderDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
