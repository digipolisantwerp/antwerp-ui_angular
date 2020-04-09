import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[auiHeroCta]',
})
export class HeroCtaDirective {
  @HostBinding() class = 'o-hero__cta';
}
