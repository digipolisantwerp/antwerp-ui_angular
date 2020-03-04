import { Pipe, PipeTransform, Inject } from '@angular/core';

import { MONTH_LABELS, DEFAULT_MONTH_LABELS } from '../agenda.conf';

@Pipe({
	name: 'monthPipe',
})
export class MonthPipe implements PipeTransform {
	constructor(
		@Inject(MONTH_LABELS) private monthLabels = DEFAULT_MONTH_LABELS
	) {}

	public transform(value: any): string {
		const month = parseInt(value, 10);

		if (isNaN(month)) {
			return null;
		}

		const index = (month - 1).toString();
		return this.monthLabels[index.toString()] || DEFAULT_MONTH_LABELS[index.toString()];
	}
}
