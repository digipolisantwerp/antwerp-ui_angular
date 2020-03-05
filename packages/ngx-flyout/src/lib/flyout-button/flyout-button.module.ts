import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlyoutModule} from '../flyout/flyout.module';

import {FlyoutButtonComponent} from './components/flyout-button/flyout-button.component';

@NgModule({
  imports: [
    CommonModule,
    FlyoutModule,
  ],
  declarations: [
    FlyoutButtonComponent,
  ],
  exports: [
    FlyoutButtonComponent,
  ],
})
export class FlyoutButtonModule {
}
