import {Component, Input} from '@angular/core';

@Component({
  selector: 'aui-month-view-dots',
  templateUrl: './month-view-dots.component.html',
})
export class MonthViewDotsComponent {
  @Input() public dots: string[];
}
