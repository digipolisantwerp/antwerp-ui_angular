import { Component } from '@angular/core';
import { DateRange, IntervalBuilder } from '@acpaas-ui/ngx-utils';
import { addDays } from 'date-fns';

@Component({
  templateUrl: './aui-calendar.page.html',
})
export class CalendarDemoPage {
  public clickedDate: Date = new Date();
  public range: DateRange = [1, 6];
  public interval = IntervalBuilder.dateInterval(addDays(new Date(), 1), addDays(new Date(), 3))
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

  public javascript3 = `import { DateRange } from '@acpaas-ui/ngx-utils';

public clickedDate: Date = new Date();
public range: DateRange = [1, 6];
// date-fns is used to created the dates but do note that a Date object is passed through
public interval = IntervalBuilder
    .dateInterval(addDays(new Date(), 1), addDays(new Date(), 3))
    .closedInterval()
    .build();

selectDate(event) {
	if (event.complete) {
		this.clickedDate = event.date;
	}
}`;
  public html = `<aui-calendar
  [range]="range"
	[interval]="interval"
	[selectedDate]="clickedDate"
	(selectDate)="selectDate($event)">
</aui-calendar>`;

  public changeDate(event) {
    if (event.complete) {
      this.clickedDate = event.date;
    }
  }
}
