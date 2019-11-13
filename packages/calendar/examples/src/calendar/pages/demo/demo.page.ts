import { Component } from '@angular/core';
import { DateRange } from '@acpaas-ui/js-date-utils';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {
	public clickedDate: Date = new Date();
	public range: DateRange = [1, 6];

	public javascript1 = `import { CalendarModule } from '@acpaas-ui/ngx-components/calendar;'

@NgModule({
	imports: [
		CalendarModule
	]
});

export class AppModule {};`;

	public javascript2 = `import { CalendarModule } from '@acpaas-ui/ngx-components/calendar;'

@NgModule({
	imports: [
		CalendarModule.forChild([
			'Monday', 'Tuesdag', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
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
