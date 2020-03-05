import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {DEFAULT_MONTH_LABELS, DEFAULT_MORE_LABEL, DEFAULT_WEEKDAY_LABELS, MONTH_LABELS, MORE_LABEL, WEEKDAY_LABELS} from './agenda.conf';
import {HammerConfig} from './hammer.conf';
import {AgendaComponent} from './components/agenda/agenda.component';
import {MonthViewComponent} from './components/month-view/month-view.component';
import {MonthViewCalendarComponent} from './components/month-view-calendar/month-view-calendar.component';
import {MonthViewDotsComponent} from './components/month-view-dots/month-view-dots.component';
import {MonthViewEventSlotComponent} from './components/month-view-event-slot/month-view-event-slot.component';
import {MonthViewEventSlotsComponent} from './components/month-view-event-slots/month-view-event-slots.component';
import {MoreButtonComponent} from './components/more-button/more-button.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MonthPipe} from './pipes/month.pipe';
import {WeekdayPipe} from './pipes/weekday.pipe';
import {DateHelperService} from './services/date-helper.service';
import {MonthViewSlotsService} from './services/month-view-slots.service';
import {SortingService} from './services/sorting.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MonthPipe,
    WeekdayPipe,
    AgendaComponent,
    MonthViewComponent,
    MonthViewCalendarComponent,
    MonthViewDotsComponent,
    MonthViewEventSlotComponent,
    MonthViewEventSlotsComponent,
    MoreButtonComponent,
    NavigationComponent,
  ],
  exports: [
    MonthPipe,
    WeekdayPipe,
    AgendaComponent,
    MonthViewComponent,
    MonthViewCalendarComponent,
    MonthViewDotsComponent,
    MonthViewEventSlotComponent,
    MonthViewEventSlotsComponent,
    MoreButtonComponent,
    NavigationComponent,
  ],
  providers: [
    DateHelperService,
    MonthViewSlotsService,
    SortingService,
    {provide: WEEKDAY_LABELS, useValue: DEFAULT_WEEKDAY_LABELS},
    {provide: MONTH_LABELS, useValue: DEFAULT_MONTH_LABELS},
    {provide: MORE_LABEL, useValue: DEFAULT_MORE_LABEL},
    {provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig},
  ],
})
export class AgendaModule {
  static forChild(
    weekdayLabels: string[],
    monthLabels: string[],
    moreLabel: string
  ): ModuleWithProviders {
    return {
      ngModule: AgendaModule,
      providers: [
        DateHelperService,
        MonthViewSlotsService,
        SortingService,
        {provide: WEEKDAY_LABELS, useValue: weekdayLabels},
        {provide: MONTH_LABELS, useValue: monthLabels},
        {provide: MORE_LABEL, useValue: moreLabel},
        {provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig},
      ],
    };
  }
}
