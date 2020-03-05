import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Directives} from './directives';
import {Services} from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Directives,
  ],
  exports: [
    Directives,
  ],
  providers: [
    Services,
  ],
})
export class FlyoutModule {
}
