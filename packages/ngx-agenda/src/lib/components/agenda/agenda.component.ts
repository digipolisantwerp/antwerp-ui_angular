import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {DateHelperService} from '../../services/date-helper.service';
import {DateRangeInterface, DAYS, EventInterface, HighLightInterface, VIEWS} from '../../types/agenda.types';

@Component({
  selector: 'aui-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent implements OnInit, OnChanges, OnDestroy {
  // Default
  @Input() public events: EventInterface[];
  @Input() public view: VIEWS;
  public views = VIEWS;

  // Month view
  @Input() public startDayOfWeek: DAYS = DAYS.MONDAY; // Start of the week (0 = sunday, 1 = monday, ...)
  @Input() public activeDate: Date;
  @Input() public highlights: HighLightInterface;
  @Input() public monthEventItemTemplate: TemplateRef<any>;
  @Output() public navigate = new EventEmitter<DateRangeInterface>();
  @Output() public selectRange = new EventEmitter<DateRangeInterface>();
  @Output() public selectDay = new EventEmitter<Date>();
  @Output() public selectEvent = new EventEmitter<EventInterface>();
  @Output() public clickMore = new EventEmitter();

  public agendaSize$;
  public weekdays: DAYS[] = [1, 2, 3, 4, 5, 6, 0];
  public today: Date = AgendaComponent.getToday();
  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  private static getToday(): Date {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  constructor(
    private elementRef: ElementRef,
    private dateHelperService: DateHelperService
  ) {
  }

  public ngOnInit() {
    this.watchAgendaSize();
  }

  public ngOnChanges(changes) {
    if (changes && changes.startDayOfWeek) {
      if (this.view === VIEWS.MONTH) {
        this.weekdays = this.dateHelperService.orderWeekDays(changes.startDayOfWeek.currentValue);
      }
    }
  }

  public swipe(e) {
    if (e.pointerType !== 'touch') {
      return;
    }

    if (e.type === 'swipeleft') {
      this.nextMonth();
      return;
    }

    if (e.type === 'swiperight') {
      this.prevMonth();
      return;
    }
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public onNavigate(date: Date): void {
    this.activeDate = new Date(date);
  }

  public onDisplayRange(range: DateRangeInterface): void {
    this.navigate.emit(range);
  }

  public onSelectDay(date: Date): void {
    this.selectDay.emit(date);
  }

  public onSelectEvent(event: EventInterface): void {
    this.selectEvent.emit(event);
  }

  public onClickMore(date: Date) {
    this.clickMore.emit(date);
  }

  public prevMonth(): void {
    const date = new Date(this.activeDate);
    this.onNavigate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  public nextMonth(): void {
    const date = new Date(this.activeDate);
    this.onNavigate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  public onSelectRange(range: DateRangeInterface) {
    this.selectRange.emit(range);
  }

  private watchAgendaSize(): void {
    this.agendaSize$ = timer(0, 250)
      .pipe(
        takeUntil(this.componentDestroyed$),
        map(() => {
          return this.elementRef.nativeElement.offsetWidth;
        }),
        distinctUntilChanged()
      )
      .pipe(
        map((width) => {
          if (width > 800) {
            return 'o-agenda--big';
          } else {
            return 'o-agenda--small';
          }
        })
      );
  }
}
