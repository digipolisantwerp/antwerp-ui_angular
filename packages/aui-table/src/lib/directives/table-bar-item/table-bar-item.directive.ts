import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[auiTableBarItem]',
})
export class TableBarItemDirective {
  @HostBinding('class.a-table-bar__item') setClass = true;
}
