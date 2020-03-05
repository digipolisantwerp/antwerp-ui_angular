import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CopyrightComponent} from './components/copyright/copyright.component';
import {FooterComponent} from './components/footer/footer.component';
import {SubFooterComponent} from './components/subfooter/subfooter.component';
import {FooterBottomDirective} from './directives/bottom.directive';
import {FooterContentDirective} from './directives/content.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
    FooterBottomDirective,
    FooterContentDirective,
  ],
  exports: [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
    FooterBottomDirective,
    FooterContentDirective,
  ],
})
export class FooterModule {
}
