import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {VIEWS} from '../../types/agenda.types';

@Component({
  selector: 'aui-agenda-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit, OnDestroy {
  @HostBinding('class.o-agenda__header') public cssClass = true;
  @Input() public activeDate: string;
  @Input() public view: VIEWS;
  @Input() public today: Date;
  @Output() public navigate = new EventEmitter<Date>();
  public views = VIEWS;
  public navigate$: Subject<Date> = new Subject();
  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

  public ngOnInit() {
    this.navigate$
      .pipe(
        takeUntil(this.componentDestroyed$),
        distinctUntilChanged(),
        debounceTime(200)
      )
      .subscribe((value: Date) => {
        this.navigate.emit(value);
      });
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public prev(): void {
    const date = new Date(this.activeDate);
    this.changeDate(date, -1);
  }

  public next(): void {
    const date = new Date(this.activeDate);
    this.changeDate(date, 1);
  }

  public goToToday(): void {
    this.navigate$.next(this.today);
  }

  public changeDate(date: Date, orient: number): void {
    if (this.view === VIEWS.DAY) {
      return this.navigate$.next(this.changeDay(date, orient));
    }

    if (this.view === VIEWS.MONTH) {
      return this.navigate$.next(this.changeMonth(date, orient));
    }

    if (this.view === VIEWS.YEAR) {
      return this.navigate$.next(this.changeYear(date, orient));
    }
  }

  public changeDay(date: Date, orient: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + orient);
  }

  public changeMonth(date: Date, orient: number): Date {
    return new Date(date.getFullYear(), date.getMonth() + orient, 1);
  }

  public changeYear(date: Date, orient: number): Date {
    return new Date(date.getFullYear() + orient, 0, 1);
  }
}
