import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CALENDAR_DEFAULT_MONTH_LABELS,
  CALENDAR_DEFAULT_WEEKDAY_LABELS,
  CALENDAR_MONTH_LABELS,
  CALENDAR_WEEKDAY_LABELS
} from './calendar.conf';
import {MonthLabelsConfig, WeekdayLabelsConfig} from './types/calendar.types';
import {CalendarService} from './services/calendar.service';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarDecenniaComponent} from './components/decennia/decennia.component';
import {CalendarMonthComponent} from './components/month/month.component';
import {CalendarYearComponent} from './components/year/year.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
  ],
  exports: [
    CalendarComponent,
    CalendarDecenniaComponent,
    CalendarMonthComponent,
    CalendarYearComponent,
  ],
  providers: [
    CalendarService,
    {provide: CALENDAR_WEEKDAY_LABELS, useValue: CALENDAR_DEFAULT_WEEKDAY_LABELS},
    {provide: CALENDAR_MONTH_LABELS, useValue: CALENDAR_DEFAULT_MONTH_LABELS},
  ],
})
export class CalendarModule {
  static forChild(
    weekdayLabels: WeekdayLabelsConfig,
    monthLabels: MonthLabelsConfig
  ): ModuleWithProviders {
    return {
      ngModule: CalendarModule,
      providers: [
        CalendarService,
        {provide: CALENDAR_WEEKDAY_LABELS, useValue: weekdayLabels},
        {provide: CALENDAR_MONTH_LABELS, useValue: monthLabels},
      ],
    };
  }
}
