import {IntervalBuilder} from './interval.builder';

describe('Generic Interval', () => {
  it('Open Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).openInterval().build();
    expect(interval.isInRange(0)).toBe(false);
    expect(interval.isInRange(3)).toBe(false);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.isInRange(-1)).toBe(false);
    expect(interval.isInRange(5)).toBe(false);
    expect(interval.toString()).toBe(']0,3[');
  });
  it('Closed Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).closedInterval().build();
    expect(interval.isInRange(0)).toBe(true);
    expect(interval.isInRange(3)).toBe(true);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.isInRange(-1)).toBe(false);
    expect(interval.isInRange(5)).toBe(false);
    expect(interval.toString()).toBe('[0,3]');
  });
  it('Leftopen Bound Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).leftOpenInterval().build();
    expect(interval.isInRange(0)).toBe(false);
    expect(interval.isInRange(3)).toBe(true);
    expect(interval.isInRange(-1)).toBe(false);
    expect(interval.isInRange(4)).toBe(false);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.toString()).toBe(']0,3]');
  });
  it('Rightopen Bound Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).rightOpenInterval().bounded().build();
    expect(interval.isInRange(0)).toBe(true);
    expect(interval.isInRange(3)).toBe(false);
    expect(interval.isInRange(-1)).toBe(false);
    expect(interval.isInRange(4)).toBe(false);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.toString()).toBe('[0,3[');
  });
  it('Leftopen Unbound Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).leftOpenInterval().unbounded().build();
    expect(interval.isInRange(0)).toBe(true);
    expect(interval.isInRange(-1)).toBe(true);
    expect(interval.isInRange(-10)).toBe(true);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.isInRange(3)).toBe(true);
    expect(interval.isInRange(4)).toBe(false);
    expect(interval.toString()).toBe(']-infinity,3]');
  });
  it('Rightopen Unbound Interval', () => {
    const interval = IntervalBuilder.numberInterval(0, 3).rightOpenInterval().unbounded().build();
    expect(interval.isInRange(0)).toBe(true);
    expect(interval.isInRange(-1)).toBe(false);
    expect(interval.isInRange(2)).toBe(true);
    expect(interval.isInRange(3)).toBe(true);
    expect(interval.isInRange(4)).toBe(true);
    expect(interval.isInRange(10)).toBe(true);
    expect(interval.toString()).toBe('[0,+infinity[');
  });
});
