import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaskDirective} from './directives/mask.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MaskDirective,
  ],
  exports: [
    MaskDirective,
  ],
  providers: [],
})
export class MaskModule {
}
