import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {DateHelper} from '@acpaas-ui/js-date-utils';

import {DateRangeInterface, DayRangeInterface, EventInterface, SlotInterface, WeekdayInterface} from '../../types/agenda.types';

@Component({
  selector: 'aui-agenda-month-view-calendar',
  templateUrl: './month-view-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthViewCalendarComponent implements OnInit, OnDestroy {
  @HostBinding('class.o-agenda__table-grid') public cssClass = true;

  @Input() public weeks: WeekdayInterface[][];
  @Input() public slots: SlotInterface[];
  @Input() public eventItemTemplate: TemplateRef<any>;
  @Input() public selectedDay: string;
  @Input() public range = {
    from: null,
    to: null,
  };

  @Output() public rowHeight = new EventEmitter<number>();
  @Output() public selectDay = new EventEmitter<string>();
  @Output() public selectRange = new EventEmitter<DayRangeInterface>();
  @Output() public selectEvent = new EventEmitter<EventInterface>();
  @Output() public clickMore = new EventEmitter();
  @Output() public dragRange = new EventEmitter();

  public pressedDay: string; // format: YYYY-MM-DD
  public currentDay: string; // format: YYYY-MM-DD

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private elementRef: ElementRef
  ) {
  }

  public ngOnInit() {
    this.currentDay = DateHelper.formatDate(new Date(), 'YYYY-MM-DD');

    this.watchRowHeigth()
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe((height: number) => {
        this.rowHeight.emit(height);
      });

    this.watchDragOver()
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe((range) => {
        this.emitDragRange(range);
      });

    this.watchDrop()
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(() => {
        this.emitSelectRange(this.range);
      });
  }

  public isToday(date: Date) {
    const day = DateHelper.formatDate(date, 'YYYY-MM-DD');

    return day === this.currentDay;
  }

  public isSelected(day: Date, range: DateRangeInterface): boolean {
    const currentDay = DateHelper.formatDate(day, 'YYYY-MM-DD');
    const from = range && range.from ? DateHelper.formatDate(new Date(range.from.toString()), 'YYYY-MM-DD') : null;
    const to = range && range.to ? DateHelper.formatDate(new Date(range.to.toString()), 'YYYY-MM-DD') : null;

    return currentDay === this.selectedDay
      || ((from && new Date(from) <= new Date(currentDay)) && (to && new Date(to) >= new Date(currentDay)));
  }

  public resetRange() {
    this.emitDragRange({
      from: null,
      to: null,
    });
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public isCurrentMonth(day: string, date: Date) {
    const dayDate = new Date(day);
    const current = new Date(date);

    return dayDate.getMonth() !== current.getMonth();
  }

  public emitSelectDay(day: Date): void {
    // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
    this.selectDay.emit(DateHelper.formatDate(day, 'YYYY-MM-DD'));
    this.resetRange();
  }

  public emitDragRange(range) {
    this.dragRange.emit(range);
  }

  public onSelectEvent(event: EventInterface): void {
    this.selectEvent.emit(event);
    this.resetRange();
  }

  public onClickMore(day: Date) {
    this.resetRange();
    this.clickMore.emit(day);
  }

  public dragStart(date: Date) {
    this.selectDay.emit(null);
    this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
  }

  public touchStart(date: Date) {
    this.selectDay.emit(null);
    this.pressedDay = DateHelper.formatDate(date, 'YYYY-MM-DD');
  }

  private watchRowHeigth(): Observable<number> {
    const weekHeight$ = new Subject<number>();

    timer(0, 250)
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(() => {
        const row = this.elementRef.nativeElement.querySelector('.o-agenda__table-row');

        if (row) {
          weekHeight$.next(row.offsetHeight);
        }
      });

    return weekHeight$
      .pipe(
        distinctUntilChanged()
      );
  }

  private watchDragOver() {
    const target$: Subject<DayRangeInterface> = new Subject();

    const handleElement = (element: HTMLElement) => {
      if (element && element.parentElement && element.parentElement.getAttribute('date')) {

        const pressedDay = new Date(this.pressedDay);
        const dragOverDate = new Date(element.parentElement.getAttribute('date'));

        if (pressedDay < dragOverDate) {
          target$.next({
            from: this.pressedDay,
            to: DateHelper.formatDate(dragOverDate as Date, 'YYYY-MM-DD'),
          });
        } else {
          target$.next({
            from: DateHelper.formatDate(dragOverDate as Date, 'YYYY-MM-DD'),
            to: this.pressedDay,
          });
        }
      }
    };

    document.addEventListener('dragover', (event) => {
      event.preventDefault();
      const target: HTMLElement = event.target as HTMLElement;
      handleElement(target);
    }, false);

    document.addEventListener('touchmove', (event) => {
      if (this.pressedDay) {
        const touch = event.touches[0];
        const element: HTMLElement = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
        handleElement(element);
      }
    }, false);

    return target$
      .pipe(
        distinctUntilChanged((x, y) => {
          return x.from === y.from && x.to === y.to;
        })
      );
  }

  private watchDrop() {
    const target$ = new Subject();

    document.addEventListener('drop', (event) => {
      // prevent default action (open as link for some elements)
      event.preventDefault();

      target$.next();
    }, false);

    document.addEventListener('touchend', (event) => {
      // prevent default action (open as link for some elements)
      if (this.pressedDay) {
        event.preventDefault();
        this.pressedDay = null;
        target$.next();
      }
    });

    return target$;
  }

  private emitSelectRange(range: DateRangeInterface) {
    // Never emit a specific day as a `Date`, always use a string in `YYYY-MM-DD` format.
    this.selectRange.emit({
      from: DateHelper.formatDate(range.from as Date, 'YYYY-MM-DD'),
      to: DateHelper.formatDate(range.to as Date, 'YYYY-MM-DD'),
    });
  }
}
