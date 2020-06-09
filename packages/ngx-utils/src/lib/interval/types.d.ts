// tslint:disable-next-line:no-namespace
export declare namespace Interval {
  export type IntervalType = 'closed' | 'open' | 'leftopen' | 'rightopen';
  export type IntervalBound = 'bounded' | 'unbounded';
  export type IntervalMeaning = 'OR' | 'NOR';

  export interface IInterval<T> {
    type: IntervalType;
    bound: IntervalBound;
    min: T;
    max: T;
    meaning: IntervalMeaning;

    isInRange(value: T): boolean;
  }

  export type DateInterval = IInterval<Date>;
}
