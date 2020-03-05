import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlyoutActionDirective} from './directives/flyout-action.directive';
import {FlyoutCloseDirective} from './directives/flyout-close.directive';
import {FlyoutZoneDirective} from './directives/flyout-zone.directive';
import {FlyoutDirective} from './directives/flyout.directive';
import {FlyoutService} from './services/flyout.service';

export const Directives = [
  FlyoutActionDirective,
  FlyoutCloseDirective,
  FlyoutZoneDirective,
  FlyoutDirective,
];

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
    FlyoutService,
  ],
})
export class FlyoutModule {
}
