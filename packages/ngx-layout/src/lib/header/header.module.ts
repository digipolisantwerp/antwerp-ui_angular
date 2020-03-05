import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {HeaderContentDirective} from './directives/content.directive';
import {HeaderLogoDirective} from './directives/logo.directive';
import {HeaderMenuItemDirective} from './directives/menu-item.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
  ],
  exports: [
    HeaderComponent,
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
  ],
})
export class HeaderModule {
}
