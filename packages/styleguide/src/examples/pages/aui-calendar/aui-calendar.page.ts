import {Component} from '@angular/core';
import {DateRange} from '@acpaas-ui/js-date-utils';
import {IntervalBuilder} from '@acpaas-ui/ngx-utils';
import * as _moment from 'moment';

const Moment: new () => _moment.Moment = _moment as any;

@Component({
  templateUrl: './aui-calendar.page.html',
})
export class CalendarDemoPage {
  public clickedDate: Date = new Date();
  public range: DateRange = [1, 6];
  public interval = IntervalBuilder
    .momentInterval(new Moment(), (new Moment()).add(1, 'day'))
    .closedInterval()
    .build();

  public javascript1 = `import { CalendarModule } from '@acpaas-ui/ngx-calendar;'

@NgModule({
	imports: [
		CalendarModule
	]
});

export class AppModule {};`;

  public javascript2 = `import { CalendarModule } from '@acpaas-ui/ngx-calendar;'

@NgModule({
	imports: [
		CalendarModule.forChild([
			'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
		], [
			'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
		])
	]
});

export class AppModule {};`;

  public javascript3 = `import { DateRange } from '@acpaas-ui/js-date-utils';

public clickedDate: Date = new Date();
public range: DateRange = [1, 6];

selectDate(event) {
	if (event.complete) {
		this.clickedDate = event.date;
	}
}`;
  public html = `<aui-calendar
	[range]="range"
	[selectedDate]="clickedDate"
	(selectDate)="selectDate($event)">
</aui-calendar>`;

  public changeDate(event) {
    if (event.complete) {
      this.clickedDate = event.date;
    }
  }
}
