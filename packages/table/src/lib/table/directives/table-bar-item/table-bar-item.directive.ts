import { HostBinding, Directive } from '@angular/core';

@Directive({
	selector: '[auiTableBarItem]',
})
export class TableBarItemDirective {
	@HostBinding('class.aui-table-bar-item') setClass = true;
}
