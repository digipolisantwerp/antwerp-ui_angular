import {IntervalBuilder} from './interval.builder';
import * as _moment from 'moment';

const Moment: new () => _moment.Moment = _moment as any;

describe('Moment Interval', () => {
  const today = (new Moment()).toDate();
  const yesterday = (new Moment()).subtract(1, 'day').toDate();
  const tomorrow = (new Moment()).add(1, 'day').toDate();
  const nextWeek = (new Moment()).add(1, 'week').toDate();
  const lastWeek = (new Moment()).subtract(1, 'week').toDate();
  const theDayBefore = (new Moment()).subtract(2, 'days').toDate();
  const theDayAfter = (new Moment()).add(2, 'days').toDate();


  it('Open Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).openInterval().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(false);
    expect(interval.isInRange(theDayBefore)).toBe(false);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(false);
    expect(interval.isInRange(lastWeek)).toBe(false);
  });
  it('Closed Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).closedInterval().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(true);
    expect(interval.isInRange(theDayBefore)).toBe(true);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(false);
    expect(interval.isInRange(lastWeek)).toBe(false);
  });
  it('Lefopen Bound Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).leftOpenInterval().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(true);
    expect(interval.isInRange(theDayBefore)).toBe(false);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(false);
    expect(interval.isInRange(lastWeek)).toBe(false);
  });
  it('Rightopen Bound Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).rightOpenInterval().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(false);
    expect(interval.isInRange(theDayBefore)).toBe(true);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(false);
    expect(interval.isInRange(lastWeek)).toBe(false);
  });
  it('Leftopen Unbound Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).leftOpenInterval().unbounded().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(true);
    expect(interval.isInRange(theDayBefore)).toBe(true);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(false);
    expect(interval.isInRange(lastWeek)).toBe(true);
  });
  it('Rightopen Unbound Interval', () => {
    const interval = IntervalBuilder.dateInterval(theDayBefore, theDayAfter).rightOpenInterval().unbounded().build();
    expect(interval.isInRange(today)).toBe(true);
    expect(interval.isInRange(theDayAfter)).toBe(true);
    expect(interval.isInRange(theDayBefore)).toBe(true);
    expect(interval.isInRange(tomorrow)).toBe(true);
    expect(interval.isInRange(yesterday)).toBe(true);
    expect(interval.isInRange(nextWeek)).toBe(true);
    expect(interval.isInRange(lastWeek)).toBe(false);
  });
});
