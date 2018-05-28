import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[auiHeroCard]',
})
export class HeroCardDirective {
	@HostBinding() class = 'aui-hero-card';
}
