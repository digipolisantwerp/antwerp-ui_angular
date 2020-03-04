import {Inject, Pipe, PipeTransform} from '@angular/core';

import {DEFAULT_WEEKDAY_LABELS, WEEKDAY_LABELS} from '../agenda.conf';

@Pipe({
  name: 'weekdayPipe',
})
export class WeekdayPipe implements PipeTransform {
  constructor(
    @Inject(WEEKDAY_LABELS) private weekdayLabels = DEFAULT_WEEKDAY_LABELS
  ) {
  }

  public transform(value: number): string {
    return this.weekdayLabels[(value).toString()] || DEFAULT_WEEKDAY_LABELS[(value).toString()];
  }
}
