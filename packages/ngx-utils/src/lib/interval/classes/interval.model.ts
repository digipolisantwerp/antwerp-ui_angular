import { Interval } from '../types/interval.types';
import IInterval = Interval.IInterval;

export abstract class IntervalModel<T> implements IInterval<T> {
  bound: Interval.IntervalBound = 'bounded';
  type: Interval.IntervalType;
  meaning: Interval.IntervalMeaning = 'OR';

  constructor(public readonly min: T, public readonly max: T) {}

  abstract isInRange(value: T);
}
