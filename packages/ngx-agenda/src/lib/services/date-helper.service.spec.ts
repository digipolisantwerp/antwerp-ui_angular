import {DateHelperService} from './date-helper.service';
import {DAYS} from '../types/agenda.types';

describe('DateHelper Service', () => {
  let dateHelper;

  beforeEach(() => {
    dateHelper = new DateHelperService();
  });

  it('should return first weekday of month', () => {
    const january = new Date('2018-01-26');

    expect(dateHelper.getFirstWeekDayOfMonth(january, 1)).toEqual(new Date(2018, 0, 1));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 2)).toEqual(new Date(2017, 11, 26));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 3)).toEqual(new Date(2017, 11, 27));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 4)).toEqual(new Date(2017, 11, 28));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 5)).toEqual(new Date(2017, 11, 29));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 6)).toEqual(new Date(2017, 11, 30));
    expect(dateHelper.getFirstWeekDayOfMonth(january, 0)).toEqual(new Date(2017, 11, 31));
  });

  it('should return last weekday of month', () => {
    const january = new Date('2018-01-26');

    expect(dateHelper.getLastWeekDayOfMonth(january, 1)).toEqual(new Date(2018, 1, 4));
    expect(dateHelper.getLastWeekDayOfMonth(january, 2)).toEqual(new Date(2018, 1, 5));
    expect(dateHelper.getLastWeekDayOfMonth(january, 3)).toEqual(new Date(2018, 1, 6));
    expect(dateHelper.getLastWeekDayOfMonth(january, 4)).toEqual(new Date(2018, 0, 31));
    expect(dateHelper.getLastWeekDayOfMonth(january, 5)).toEqual(new Date(2018, 1, 1));
    expect(dateHelper.getLastWeekDayOfMonth(january, 6)).toEqual(new Date(2018, 1, 2));
    expect(dateHelper.getLastWeekDayOfMonth(january, 0)).toEqual(new Date(2018, 1, 3));
  });

  it('should return the next day', () => {
    const now1 = new Date('2018-01-26');
    expect(dateHelper.getNextDay(now1)).toEqual(new Date('2018-01-27'));

    const now2 = new Date('2018-01-31');
    expect(dateHelper.getNextDay(now2)).toEqual(new Date('2018-02-01'));

    const now3 = new Date('2018-02-28');
    expect(dateHelper.getNextDay(now3)).toEqual(new Date('2018-03-01'));
  });

  it('should return the difference between two dates in days', () => {
    const date1 = new Date('2018-01-26');
    const date2 = new Date('2018-02-12');
    expect(dateHelper.dateDiff(date1, date2)).toEqual(17);
  });

  it('should return all calendar days for a month', () => {
    const date = new Date('2018-01-26');

    const days = dateHelper.getDaysForMonth(date, 1);
    expect(days[0]).toEqual({date: new Date(2018, 0, 1), highlights: ''});
    expect(days.length).toEqual(35);
    expect(days[34]).toEqual({date: new Date(2018, 1, 4), highlights: ''});

    const date2 = new Date('2018-02-10');

    const days2 = dateHelper.getDaysForMonth(date2, 1);
    expect(days2[0]).toEqual({date: new Date(2018, 0, 29), highlights: ''});
    expect(days2.length).toEqual(35);
    expect(days2[34]).toEqual({date: new Date(2018, 2, 4), highlights: ''});
  });

  it('should return all weeks for a month', () => {
    const date = new Date('2018-01-26');
    const days = dateHelper.getDaysForMonth(date, 1);
    const weeks = dateHelper.getWeeksForMonth(days);
    expect(weeks.length).toEqual(5);

    weeks.forEach((week) => {
      expect(week.length).toEqual(7);
    });

    expect(weeks[0][0]).toEqual({date: new Date(2018, 0, 1), highlights: ''});
    expect(weeks[0][6]).toEqual({date: new Date(2018, 0, 7), highlights: ''});
    expect(weeks[1][0]).toEqual({date: new Date(2018, 0, 8), highlights: ''});
    expect(weeks[1][6]).toEqual({date: new Date(2018, 0, 14), highlights: ''});
  });

  it('should compare dates', () => {
    expect(dateHelper.compareDates(new Date('2018-01-02 02:00'), new Date('2018-01-02 22:00'))).toBeTruthy();
    expect(dateHelper.compareDates(new Date('2018-02-02 00:00'), new Date('2018-01-02 22:00'))).toBeFalsy();
    expect(dateHelper.compareDates(new Date(), new Date())).toBeTruthy();
  });

  describe('highlights', () => {
    it('should return highlights for weekday(s)', () => {
      const range = {
        test: [
          [DAYS.SATURDAY, DAYS.SUNDAY],
        ],
      };

      // Monday 26/02/2018
      expect(dateHelper.getHighlights(range, new Date(2018, 1, 26))).toEqual('');

      // Saturday 03/03/2018
      expect(dateHelper.getHighlights(range, new Date(2018, 2, 3))).toEqual('test');

      // Sunday 04/03/2018
      expect(dateHelper.getHighlights(range, new Date(2018, 2, 4))).toEqual('test');

    });

    it('should return highlights for a specific date', () => {
      const range = {
        test: [
          new Date(2018, 1, 26),
        ],
      };

      // 26/02/2018
      expect(dateHelper.getHighlights(range, new Date(2018, 1, 26))).toEqual('test');

      // 03/03/2018
      expect(dateHelper.getHighlights(range, new Date(2018, 2, 3))).toEqual('');

    });
  });

  it('should order weekdays', () => {
    expect(dateHelper.orderWeekDays(DAYS.SUNDAY)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(dateHelper.orderWeekDays(DAYS.MONDAY)).toEqual([1, 2, 3, 4, 5, 6, 0]);
    expect(dateHelper.orderWeekDays(DAYS.THURSDAY)).toEqual([4, 5, 6, 0, 1, 2, 3]);
  });

  describe('Compare dates', () => {

    it('should return true if days are the same but hours are different', () => {
      expect(dateHelper.compareDates(new Date('2018-02-26T08:58:15.357Z'), new Date('2018-02-26T04:25:32.357Z'))).toBeTruthy();
    });

    it('should return true if dates are equal', () => {
      expect(dateHelper.compareDates(new Date(), new Date())).toBeTruthy();
    });

    it('should return false if days are not equal', () => {
      expect(dateHelper.compareDates(new Date(2018, 0, 1), new Date(2018, 1, 1))).toBeFalsy();
    });

  });
});
