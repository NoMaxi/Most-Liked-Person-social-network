import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgLoaderDirective } from './directives/img-loader.directive';
import { EmptyListComponent } from '../../common/components/empty-list/empty-list.component';

@NgModule({
  declarations: [
    ImgLoaderDirective,
    EmptyListComponent
  ],
  exports: [
    ImgLoaderDirective,
    EmptyListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
