import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubFooterComponent } from './components/subfooter/subfooter.component';
import { FooterBottomDirective } from './directives/bottom.directive';
import { FooterContentDirective } from './directives/content.directive';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
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
