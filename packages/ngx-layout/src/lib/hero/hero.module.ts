import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './components/hero/hero.component';
import {HeroCardDirective} from './directives/hero-card.directive';
import {HeroCtaDirective} from './directives/hero-cta.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeroComponent,
    HeroCardDirective,
    HeroCtaDirective,
  ],
  exports: [
    HeroComponent,
    HeroCardDirective,
    HeroCtaDirective,
  ],
})
export class HeroModule {
}
