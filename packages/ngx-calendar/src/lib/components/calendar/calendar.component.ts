import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

import {DateHelper, DateRange} from '@acpaas-ui/js-date-utils';

import {
  CALENDAR_DEFAULT_MONTH_LABELS,
  CALENDAR_DEFAULT_WEEKDAY_LABELS,
  CALENDAR_MONTH_LABELS,
  CALENDAR_WEEKDAY_LABELS
} from '../../calendar.conf';
import {
  CALENDAR_VIEW_DECENNIA,
  CALENDAR_VIEW_MONTH,
  CALENDAR_VIEW_YEAR,
  MonthLabelsConfig,
  WeekdayLabelsConfig
} from '../../types/calendar.types';
import {CalendarService} from '../../services/calendar.service';
import {Interval} from '@acpaas-ui/ngx-utils';

@Component({
  selector: 'aui-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit, OnChanges {
  @HostBinding('attr.role') role = 'application';
  @HostBinding('attr.aria-hidden') ariahidden = 'false';

  @Input() ariaPreviousLabels = [
    'Ga naar vorige maand',
    'Ga naar vorig jaar',
    'Ga naar vorige 12 jaren',
  ];
  @Input() ariaNextLabels = [
    'Ga naar volgende maand',
    'Ga naar volgend jaar',
    'Ga naar volgende 12 jaren',
  ];

  @Input() selectedDate: Date;
  @Input() range: DateRange;
  @Input()
  interval?: Interval.IInterval<Date>;
  @Input() weekdayLabels: WeekdayLabelsConfig;
  @Input() monthLabels: MonthLabelsConfig;
  @Output() selectDate = new EventEmitter();

  public CALENDAR_VIEW_MONTH = CALENDAR_VIEW_MONTH;
  public CALENDAR_VIEW_YEAR = CALENDAR_VIEW_YEAR;
  public CALENDAR_VIEW_DECENNIA = CALENDAR_VIEW_DECENNIA;
  public activeDate: Date;
  public activeView: string = CALENDAR_VIEW_MONTH;
  public headerLabel = '';
  public ariaPreviousLabel = this.ariaPreviousLabels[0];
  public ariaNextLabel = this.ariaNextLabels[0];

  constructor(
    @Inject(CALENDAR_MONTH_LABELS) public moduleMonthLabels = CALENDAR_DEFAULT_MONTH_LABELS,
    @Inject(CALENDAR_WEEKDAY_LABELS) public moduleWeekdayLabels = CALENDAR_DEFAULT_WEEKDAY_LABELS,
    private calendarService: CalendarService
  ) {
  }

  public ngOnInit() {
    this.initControl();
  }

  ngOnChanges(changes: SimpleChanges) {
    const selectedDate = changes.selectedDate && changes.selectedDate.currentValue ? changes.selectedDate : null;

    if (
      typeof this.monthLabels !== 'undefined' &&
      selectedDate &&
      !DateHelper.datesAreEqual(selectedDate.currentValue, selectedDate.previousValue)
    ) {
      this.activeDate = this.selectedDate;
      this.updateHeaderLabel();
    } else {
      this.activeDate = DateHelper.parseDate(new Date());
      this.initControl();
    }
  }

  updateActiveDate(factor: number = 0): void {
    const activeDate = this.activeDate ? new Date(this.activeDate) : new Date();

    switch (this.activeView) {
      case CALENDAR_VIEW_MONTH:
        activeDate.setMonth(activeDate.getMonth() + factor);
        break;
      case CALENDAR_VIEW_YEAR:
        activeDate.setFullYear(activeDate.getFullYear() + factor);
        break;
      case CALENDAR_VIEW_DECENNIA:
        activeDate.setFullYear(activeDate.getFullYear() + (12 * factor));
        break;
    }

    this.activeDate = activeDate;
    this.updateHeaderLabel();
  }

  switchView(factor: number = 1): void {
    const views = [CALENDAR_VIEW_MONTH, CALENDAR_VIEW_YEAR, CALENDAR_VIEW_DECENNIA];

    const currView = views.indexOf(this.activeView);
    let nextView = (currView + factor) >= views.length ? 0 : currView + factor;
    nextView = nextView < 0 ? views.length - 1 : nextView;

    this.activeView = views[nextView];

    // reset activeDate when returning to month view without model update
    if (this.selectedDate && nextView === 0 && factor === 1) {
      this.activeDate = this.selectedDate;
    }

    this.updateHeaderLabel();
  }

  updateHeaderLabel(): void {
    switch (this.activeView) {
      case CALENDAR_VIEW_MONTH:
        this.headerLabel = this.monthLabels[this.activeDate.getMonth()] + ' ' + this.activeDate.getFullYear();
        this.ariaPreviousLabel = this.ariaPreviousLabels[0];
        this.ariaNextLabel = this.ariaNextLabels[0];
        break;
      case CALENDAR_VIEW_YEAR:
        this.headerLabel = String(this.activeDate.getFullYear());
        this.ariaPreviousLabel = this.ariaPreviousLabels[1];
        this.ariaNextLabel = this.ariaNextLabels[1];
        break;
      case CALENDAR_VIEW_DECENNIA:
        const startYear = this.activeDate.getFullYear();
        this.headerLabel = `${startYear} - ${startYear + 11}`;
        this.ariaPreviousLabel = this.ariaPreviousLabels[2];
        this.ariaNextLabel = this.ariaNextLabels[2];
        break;
    }
  }

  pickDate(date: Date): void {
    const complete = this.activeView === CALENDAR_VIEW_MONTH;

    this.selectDate.emit({
      date,
      complete,
    });

    if (!complete) {
      this.activeDate = date;
      this.switchView(-1);
    }
  }

  private initControl(): void {
    this.weekdayLabels = this.weekdayLabels || this.moduleWeekdayLabels;
    this.monthLabels = this.monthLabels || this.moduleMonthLabels;
    this.activeDate = this.calendarService.getClosestDateForRange(this.activeDate, this.range);
    if (this.selectedDate) {
      this.activeDate = this.selectedDate;
      this.updateActiveDate();
    }
    this.updateHeaderLabel();
  }
}
