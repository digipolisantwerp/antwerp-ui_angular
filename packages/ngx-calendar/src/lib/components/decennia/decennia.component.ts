import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {chunk, get} from 'lodash-es';

@Component({
  selector: 'aui-calendar-decennia',
  templateUrl: './decennia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarDecenniaComponent implements OnInit, OnChanges {
  @Input() selectedDate: Date;
  @Input() activeDate: Date;
  @Output() selectDate = new EventEmitter();

  public years = [];
  public selectedYear = -1;
  public current = -1;

  public ngOnInit() {
    const current = new Date();
    this.current = current.getFullYear();
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = get(changes, 'activeDate.currentValue');
    const previousValue = get(changes, 'activeDate.previousValue');
    const currentYear = currentValue instanceof Date ? currentValue.getFullYear() : -1;
    const previousYear = previousValue instanceof Date ? previousValue.getFullYear() : -1;
    const outOfRange = previousYear > currentYear || previousYear + 11 < currentYear;

    if (currentYear >= 0 && outOfRange) {
      this.updateYears();
    }

    this.selectedYear = this.selectedDate instanceof Date ? this.selectedDate.getFullYear() : -1;
  }

  pickDate(event: MouseEvent, date: number) {
    event.stopPropagation();

    const selectedDate = new Date(this.activeDate);
    selectedDate.setFullYear(date);

    this.selectDate.emit(selectedDate);
  }

  private updateYears(): void {
    const years = [];
    const activeYear = this.activeDate.getFullYear();

    for (let i = activeYear; i < activeYear + 12; i += 1) {
      years.push(i);
    }

    this.years = chunk(years, 4);
  }
}
