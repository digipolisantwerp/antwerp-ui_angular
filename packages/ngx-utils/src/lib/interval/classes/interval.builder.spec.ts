import {IntervalBuilder} from './interval.builder';
import {GenericInterval} from './generic.interval';
import * as _moment from 'moment';
import {MomentInterval} from './moment.interval';

const Moment: any = _moment;

describe('Interval Builder', () => {
  it('should create a generic interval', () => {
    const interval = IntervalBuilder
      .numberInterval(0, 3)
      .openInterval()
      .bounded()
      .build();

    expect(interval).toBeDefined();
    expect(interval instanceof GenericInterval).toBe(true);
  });
  it('should create a moment interval', () => {
    const interval = IntervalBuilder
      .momentInterval(new Moment(), new Moment())
      .closedInterval()
      .build();
    expect(interval).toBeDefined();
    expect(interval instanceof MomentInterval).toBe(true);
  });
});
