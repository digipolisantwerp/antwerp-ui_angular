import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[auiHeroCard]',
})
export class HeroCardDirective {
  @HostBinding() class = 'o-hero__card';
}
