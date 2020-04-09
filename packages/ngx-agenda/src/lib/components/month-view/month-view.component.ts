import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, Output, TemplateRef} from '@angular/core';
import {DateRangeInterface, DAYS, EventInterface, HighLightInterface, SlotInterface, WeekdayInterface} from '../../types/agenda.types';
import {MonthViewSlotsService} from '../../services/month-view-slots.service';
import {DateHelperService} from '../../services/date-helper.service';

@Component({
  selector: 'aui-agenda-month-view',
  templateUrl: './month-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthViewComponent implements OnChanges {
  @HostBinding('class.o-agenda__table') public cssClass = true;

  @Input() public activeDate: Date;
  @Input() public startDayOfWeek: DAYS = DAYS.MONDAY; // Start of the week (0 = sunday, 1 = monday, ...)
  @Input() public highlights: HighLightInterface;

  @Input() public weekdays: DAYS[] = [1, 2, 3, 4, 5, 6, 0];
  @Input() public events: EventInterface[];
  @Input() public eventItemTemplate: TemplateRef<any>;

  @Output() public displayRange = new EventEmitter<DateRangeInterface>();
  @Output() public selectRange = new EventEmitter<DateRangeInterface>();
  @Output() public selectDay = new EventEmitter<Date>();
  @Output() public selectEvent = new EventEmitter<EventInterface>();
  @Output() public clickMore = new EventEmitter();

  public slots: SlotInterface[];
  public weeks: WeekdayInterface[][] = [];
  public selectedDay: Date;
  public selectedRange = {
    from: null,
    to: null,
  };

  public weekHeight: number;
  public eventHeight = 28;
  public heightOffset = 28;
  public availableSlots = 0;

  constructor(
    private monthViewSlotsService: MonthViewSlotsService,
    private dateHelperService: DateHelperService
  ) {
  }

  public ngOnChanges(changes) {
    if (changes.activeDate || changes.startDayOfWeek) {
      this.weeks = this.calculateMonthWeeks(this.activeDate, this.startDayOfWeek, this.highlights);
      this.emitDisplayRange(this.weeks);
      this.setSlotsAndWeeks();
    }
  }

  public onSelectDay(day: Date): void {
    this.selectedDay = day;
    if (day) {
      this.selectDay.emit(day);
    }
  }

  public onSelectEvent(event: EventInterface): void {
    this.selectEvent.emit(event);
  }

  public onChangeRowHeight(height: number): void {
    this.availableSlots = Math.floor((height - this.heightOffset - 20) / this.eventHeight);
    this.weekHeight = height;
    this.setSlotsAndWeeks();
  }

  public onClickMore(day: Date) {
    this.clickMore.emit(day);
  }

  public onSelectRange(range: DateRangeInterface) {
    this.selectRange.emit(range);
  }

  public onDragRange(range) {
    this.selectedRange = range;
  }

  private setSlotsAndWeeks() {
    if (this.availableSlots >= 0) {
      const eventMap = this.monthViewSlotsService.generateEventMap(
        this.events,
        this.weeks,
        this.availableSlots
      );

      this.slots = eventMap.getSlots(this.eventHeight, this.weekHeight, this.heightOffset);
      this.weeks = eventMap.getEventsMap(this.availableSlots);
    }
  }

  private calculateMonthWeeks(date: Date, startOfWeek: DAYS, highlights: HighLightInterface): WeekdayInterface[][] {
    const days = this.dateHelperService.getDaysForMonth(date, startOfWeek, highlights);
    return this.dateHelperService.getWeeksForMonth(days);
  }

  private emitDisplayRange(weeks: WeekdayInterface[][]) {
    if (weeks.length > 0 && weeks[0].length > 0) {
      const from = weeks[0][0].date;
      const to = weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1].date;

      if (from && to) {
        this.displayRange.emit({
          from,
          to,
        });
      }
    }
  }
}
