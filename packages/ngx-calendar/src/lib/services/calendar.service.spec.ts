import {async, inject, TestBed} from '@angular/core/testing';

import {CalendarService} from './calendar.service';

const injectService = (cb) => {
  return inject(
    [CalendarService],
    (calendarService: CalendarService) => cb(calendarService)
  );
};

describe('The Calendar Service', () => {
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarService,
      ],
    });
  }));

  describe('getMonth', () => {
    it('returns the stored month if the year hasn\'t changed', injectService(calendarService => {
      const month = [1, 2, 3];
      calendarService.months[1] = month;

      expect(calendarService.getMonth(1)).toEqual(month);
    }));

    it('clears the stored months if the provided year differs from the stored year', injectService(calendarService => {
      calendarService.months[1] = [1, 2, 3];

      calendarService.getMonth(4, 2000);

      expect(calendarService.months[4]).toBeDefined();
      expect(calendarService.months[4].length).toBe(5); // 5 weeks in april 2000
      expect(calendarService.currentYear).toEqual(2000);
    }));

    it('generates a new month if it was not found in the cache and stores it in the cache', injectService(calendarService => {
      calendarService.getMonth(1);

      expect(calendarService.months[1]).toBeDefined();
    }));

    it('generates a new month for the provided year', injectService(calendarService => {
      const months = calendarService.getMonth(1, 2018);

      expect(months.length).toBe(5);
      expect(calendarService.months).toEqual({1: jasmine.arrayContaining([jasmine.arrayContaining([{date: 12}])])});
    }));
  });

  describe('getMonthForDate', () => {
    it('calls the getMonth method for the provided date', injectService(calendarService => {
      const requestedDate = new Date('2018-10-03');

      spyOn(calendarService, 'getMonth').and.stub();

      calendarService.getMonthForDate(requestedDate);

      expect(calendarService.getMonth).toHaveBeenCalledWith(9, 2018);
    }));
  });

  describe('getRangeForDate', () => {
    it('generates a range from the provided date and range', injectService(calendarService => {
      const requestedDate = new Date('2018-10-03');

      const range = calendarService.getRangeForDate(requestedDate, [1, 2]);

      expect(range).toEqual(jasmine.arrayContaining([2, 3, 9, 10])); // sample check
    }));
  });

  describe('getRangesForDate', () => {
    it('generates a range for the provided date, the month before and the month after', injectService(calendarService => {
      const requestedDate = new Date('2018-06-03');
      const before = new Date('2018-05-03');
      const after = new Date('2018-07-03');

      const ranges = calendarService.getRangesForDate(requestedDate, [2]);

      expect(ranges.before).toEqual([2, 9, 16, 23, 30]);
      expect(ranges.current).toEqual([6, 13, 20, 27]);
      expect(ranges.after).toEqual([4, 11, 18, 25]);
    }));
  });

  describe('getClosestDateForRange', () => {
    it('gets the closest date for now if no date was provided', injectService(calendarService => {
      const now = new Date('2018-04-03');
      jasmine.clock().mockDate(now);

      expect(calendarService.getClosestDateForRange()).toEqual(now);
    }));

    it(
      'returns the date if it is outside of the provided range',
      injectService(calendarService => {
        const requestedDate = new Date('2018-04-03');

        expect(calendarService.getClosestDateForRange(requestedDate, [4])).toBe(requestedDate);
      })
    );

    it(
      'generates the range for the requested date and returns the closest date if it is inside of the provided range',
      injectService(calendarService => {
        const now = new Date('2018-09-10');
        jasmine.clock().mockDate(now);

        const requestedDate = new Date('2018-09-09');

        expect(calendarService.getClosestDateForRange(requestedDate, [5, 6])).toEqual(now);
      })
    );
  });
});
