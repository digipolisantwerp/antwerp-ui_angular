import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[auiTableBarSearch]',
})
export class TableBarSearchDirective {
  @HostBinding('class.a-table-bar__search') setClass = true;
}
