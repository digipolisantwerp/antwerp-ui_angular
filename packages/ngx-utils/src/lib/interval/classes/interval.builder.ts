import {Interval} from '../types';
import {GenericInterval} from './generic.interval';
import {MomentInterval} from './moment.interval';
import {Moment} from 'moment';
import IInterval = Interval.IInterval;

export class IntervalBuilder<T> {

  constructor(private readonly  model: IInterval<T>) {
  }

  static momentInterval(min: Moment, max: Moment): IntervalBuilder<Moment> {
    return new IntervalBuilder(new MomentInterval(min, max));
  }

  static genericInterval(min: number, max: number): IntervalBuilder<number> {
    return new IntervalBuilder<number>(new GenericInterval(min, max));
  }

  static numberInterval(min: number, max: number): IntervalBuilder<number> {
    return IntervalBuilder.genericInterval(min, max);
  }

  openInterval(): IntervalBuilder<T> {
    this.model.type = 'open';
    return this;
  }

  leftOpenInterval(): IntervalBuilder<T> {
    this.model.type = 'leftopen';
    return this;
  }

  rightOpenInterval(): IntervalBuilder<T> {
    this.model.type = 'rightopen';
    return this;
  }

  closedInterval(): IntervalBuilder<T> {
    this.model.type = 'closed';
    return this;
  }

  bounded(): IntervalBuilder<T> {
    this.model.bound = 'bounded';
    return this;
  }

  unbounded(): IntervalBuilder<T> {
    this.model.bound = 'unbounded';
    return this;
  }

  build(): IInterval<T> {
    return this.model;
  }
}
