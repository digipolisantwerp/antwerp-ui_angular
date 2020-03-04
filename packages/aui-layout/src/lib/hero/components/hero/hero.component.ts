import {Component, ContentChild} from '@angular/core';
import {HeroCtaDirective} from '../../directives/hero-cta.directive';

@Component({
  selector: 'aui-hero',
  templateUrl: './hero.component.html',
  styleUrls: [
    './hero.component.scss',
  ],
})
export class HeroComponent {
  @ContentChild(HeroCtaDirective, {static: true}) hasCta: HeroCtaDirective;
}
