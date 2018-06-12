import { HostBinding, Directive } from '@angular/core';

@Directive({
	selector: '[auiTableBarSearch]',
})
export class TableBarSearchDirective {
	@HostBinding('class.aui-table-bar-search') setClass = true;
}
