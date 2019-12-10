import {
	Component,
	ContentChild,
} from '@angular/core';

import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderContentDirective } from '../../directives/content.directive';

@Component({
	selector: 'aui-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	@ContentChild(HeaderLogoDirective) logo: HeaderLogoDirective;
	@ContentChild(HeaderContentDirective) content: HeaderContentDirective;
}
{}
