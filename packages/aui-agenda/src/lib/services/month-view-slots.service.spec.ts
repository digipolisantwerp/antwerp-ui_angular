import {DateHelperService} from './date-helper.service';
import {SortingService} from './sorting.service';
import {MonthViewSlotsService} from './month-view-slots.service';
import {EventInterface} from '../types/agenda.types';

describe('MonthViewSlots Service', () => {
  const dateHelper = new DateHelperService();
  const sortingService = new SortingService(dateHelper);
  const monthViewSlotsService = new MonthViewSlotsService(dateHelper, sortingService);
  const date = new Date(2018, 0, 10);
  const days = dateHelper.getDaysForMonth(date, 1);
  const weeks = dateHelper.getWeeksForMonth(days);

  it('should generate array of slots', () => {
    const events: EventInterface[] = [
      {title: 'Event 11', startDate: new Date(2018, 0, 13, 15, 0), endDate: new Date(2018, 0, 13, 17, 0), fullDay: false},
      {title: 'Event 08', startDate: new Date(2018, 0, 10, 14, 0), endDate: new Date(2018, 0, 10, 17, 0), fullDay: false},
      {title: 'Event 04', startDate: new Date(2018, 0, 1, 14, 0), endDate: new Date(2018, 0, 2, 17, 0), fullDay: true},
      {title: 'Event 03', startDate: new Date(2017, 11, 27, 15, 0), endDate: new Date(2017, 11, 27, 17, 0), fullDay: false},
      {title: 'Event 02', startDate: new Date(2017, 11, 26, 15, 0), endDate: new Date(2018, 0, 2, 17, 0), fullDay: true},
      {title: 'Event 01', startDate: new Date(2017, 11, 7, 15, 0), endDate: new Date(2017, 11, 8, 17, 0), fullDay: true},
      {title: 'Event 20', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 24, 17, 0), fullDay: false},
      {title: 'Event 18', startDate: new Date(2018, 2, 8, 15, 0), endDate: new Date(2018, 2, 24, 17, 0), fullDay: false},
      {title: 'Event 19', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 24, 17, 0), fullDay: false},
      {title: 'Event 17', startDate: new Date(2018, 1, 8, 15, 0), endDate: new Date(2018, 1, 8, 17, 0), fullDay: false},
      {title: 'Event 16', startDate: new Date(2018, 1, 3, 15, 0), endDate: new Date(2018, 1, 5, 17, 0), fullDay: false},
      {title: 'Event 09', startDate: new Date(2018, 0, 11, 10, 0), endDate: new Date(2018, 0, 11, 16, 0), fullDay: false},
      {title: 'Event 14', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 0, 30, 16, 0), fullDay: false},
      {title: 'Event 05', startDate: new Date(2018, 0, 8, 10, 0), endDate: new Date(2018, 0, 12, 17, 0), fullDay: false},
      {title: 'Event 12', startDate: new Date(2018, 0, 27, 10, 0), endDate: new Date(2018, 0, 30, 17, 0), fullDay: false},
      {title: 'Event 07', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 12, 12, 0), fullDay: false},
      {title: 'Event 15', startDate: new Date(2018, 1, 1, 10, 0), endDate: new Date(2018, 1, 1, 12, 0), fullDay: false},
      {title: 'Event 06', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 13, 12, 0), fullDay: false},
      {title: 'Event 13', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 1, 2, 17, 0), fullDay: false},
      {title: 'Event 10', startDate: new Date(2018, 0, 13, 10, 0), endDate: new Date(2018, 0, 13, 17, 0), fullDay: false},
    ];

    const eventMap = monthViewSlotsService.generateEventMap(events, weeks, 4);
    const slots = eventMap.getSlots(20, 80, 0);

    expect(slots).toEqual([
      {
        meta: {week: 0, day: 0, slot: 0, span: 2},
        event: {title: 'Event 02', startDate: new Date(2017, 11, 26, 15, 0), endDate: new Date(2018, 0, 2, 17, 0), fullDay: true}, // tslint:disable-line
        display: {left: 'calc(0% + 4px)', top: '0px', width: 'calc(28.57142857142857% - 8px)'},
      }, {
        meta: {week: 0, day: 0, slot: 1, span: 2},
        event: {title: 'Event 04', startDate: new Date(2018, 0, 1, 14, 0), endDate: new Date(2018, 0, 2, 17, 0), fullDay: true}, // tslint:disable-line
        display: {left: 'calc(0% + 4px)', top: '20px', width: 'calc(28.57142857142857% - 8px)'},
      }, {
        meta: {week: 1, day: 0, slot: 0, span: 5},
        event: {title: 'Event 05', startDate: new Date(2018, 0, 8, 10, 0), endDate: new Date(2018, 0, 12, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(0% + 4px)', top: '80px', width: 'calc(71.42857142857142% - 8px)'},
      }, {
        meta: {week: 1, day: 2, slot: 1, span: 4},
        event: {title: 'Event 06', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 13, 12, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(28.57142857142857% + 4px)', top: '100px', width: 'calc(57.14285714285714% - 8px)'},
      }, {
        meta: {week: 1, day: 2, slot: 2, span: 3},
        event: {title: 'Event 07', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 12, 12, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(28.57142857142857% + 4px)', top: '120px', width: 'calc(42.857142857142854% - 8px)'},
      }, {
        meta: {week: 1, day: 2, slot: 3, span: 1},
        event: {title: 'Event 08', startDate: new Date(2018, 0, 10, 14, 0), endDate: new Date(2018, 0, 10, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(28.57142857142857% + 4px)', top: '140px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 1, day: 3, slot: 3, span: 1},
        event: {title: 'Event 09', startDate: new Date(2018, 0, 11, 10, 0), endDate: new Date(2018, 0, 11, 16, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(42.857142857142854% + 4px)', top: '140px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 1, day: 5, slot: 0, span: 1},
        event: {title: 'Event 10', startDate: new Date(2018, 0, 13, 10, 0), endDate: new Date(2018, 0, 13, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(71.42857142857142% + 4px)', top: '80px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 1, day: 5, slot: 2, span: 1},
        event: {title: 'Event 11', startDate: new Date(2018, 0, 13, 15, 0), endDate: new Date(2018, 0, 13, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(71.42857142857142% + 4px)', top: '120px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 3, day: 5, slot: 0, span: 2},
        event: {title: 'Event 12', startDate: new Date(2018, 0, 27, 10, 0), endDate: new Date(2018, 0, 30, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(71.42857142857142% + 4px)', top: '240px', width: 'calc(28.57142857142857% - 8px)'},
      }, {
        meta: {week: 4, day: 0, slot: 0, span: 2},
        event: {title: 'Event 12', startDate: new Date(2018, 0, 27, 10, 0), endDate: new Date(2018, 0, 30, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(0% + 4px)', top: '320px', width: 'calc(28.57142857142857% - 8px)'},
      }, {
        meta: {week: 4, day: 1, slot: 1, span: 4},
        event: {title: 'Event 13', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 1, 2, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(14.285714285714285% + 4px)', top: '340px', width: 'calc(57.14285714285714% - 8px)'},
      }, {
        meta: {week: 4, day: 1, slot: 2, span: 1},
        event: {title: 'Event 14', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 0, 30, 16, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(14.285714285714285% + 4px)', top: '360px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 4, day: 3, slot: 0, span: 1},
        event: {title: 'Event 15', startDate: new Date(2018, 1, 1, 10, 0), endDate: new Date(2018, 1, 1, 12, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(42.857142857142854% + 4px)', top: '320px', width: 'calc(14.285714285714285% - 8px)'},
      }, {
        meta: {week: 4, day: 5, slot: 0, span: 2},
        event: {title: 'Event 16', startDate: new Date(2018, 1, 3, 15, 0), endDate: new Date(2018, 1, 5, 17, 0), fullDay: false}, // tslint:disable-line
        display: {left: 'calc(71.42857142857142% + 4px)', top: '320px', width: 'calc(28.57142857142857% - 8px)'},
      },
    ]);
  });
});
