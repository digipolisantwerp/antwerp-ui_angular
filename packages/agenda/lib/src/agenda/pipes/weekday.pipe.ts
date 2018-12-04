import { Pipe, PipeTransform, Inject } from '@angular/core';

import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS } from '../agenda.conf';

@Pipe({
	name: 'weekdayPipe',
})
export class WeekdayPipe implements PipeTransform {
	constructor(
		@Inject(WEEKDAY_LABELS) private weekdayLabels = DEFAULT_WEEKDAY_LABELS
	) {}

	public transform(value: number): string {
		return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
	}
}
