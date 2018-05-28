import { Component, ContentChild } from '@angular/core';
import { HeroCtaDirective } from '../../directives/hero-cta.directive';

@Component({
	selector: 'aui-hero',
	templateUrl: './hero.component.html',
})
export class HeroComponent {
	@ContentChild(HeroCtaDirective) hasCta: HeroCtaDirective;
}
