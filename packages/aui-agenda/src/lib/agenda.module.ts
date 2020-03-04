import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import {Pipes} from './pipes';
import {Components} from './components';
import {Services} from './services';

import {DEFAULT_MONTH_LABELS, DEFAULT_MORE_LABEL, DEFAULT_WEEKDAY_LABELS, MONTH_LABELS, MORE_LABEL, WEEKDAY_LABELS,} from './agenda.conf';
import {HammerConfig} from './hammer.conf';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Pipes,
    Components,
  ],
  exports: [
    Pipes,
    Components,
  ],
  providers: [
    Services,
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
        Services,
        {provide: WEEKDAY_LABELS, useValue: weekdayLabels},
        {provide: MONTH_LABELS, useValue: monthLabels},
        {provide: MORE_LABEL, useValue: moreLabel},
        {provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig},
      ],
    };
  }
}
