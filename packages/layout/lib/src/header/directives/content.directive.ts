import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[auiHeaderContent]',
})
export class HeaderContentDirective {
	@HostBinding('style.display') public styleDisplay = 'block';
	@HostBinding('style.height') public styleHeight = '100%';
}
