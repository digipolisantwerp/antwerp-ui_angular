import {Interval} from '../types';
import IInterval = Interval.IInterval;

export abstract class IntervalModel<T> implements IInterval<T> {
  bound: Interval.IntervalBound = 'bounded';
  type: Interval.IntervalType;

  constructor(public readonly min: T, public readonly  max: T) {
  }

  abstract isInRange(value: T);
}
