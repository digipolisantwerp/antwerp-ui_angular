import {Component, ContentChild} from '@angular/core';

import {HeaderLogoDirective} from '../../directives/logo.directive';
import {HeaderContentDirective} from '../../directives/content.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aui-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ContentChild(HeaderLogoDirective, {static: true}) logo: HeaderLogoDirective;
  @ContentChild(HeaderContentDirective, {static: true}) content: HeaderContentDirective;
}

{
}
