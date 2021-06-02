import { IntervalBuilder } from './interval.builder';
import { addDays, addWeeks, subDays, subWeeks } from 'date-fns';

describe('date-fns Interval', () => {
  const today = new Date();
  const yesterday = subDays(new Date(), 1);
  const tomorrow = addDays(new Date(), 1);
  const nextWeek = addWeeks(new Date(), 1);
  const lastWeek = subWeeks(new Date(), 1);
  const theDayBefore = subDays(new Date(), 2);
  const theDayAfter = addDays(new Date(), 2);


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
