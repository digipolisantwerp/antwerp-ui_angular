import {IntervalModel} from './interval.model';

export class DateInterval extends IntervalModel<Date> {

  constructor(min, max) {
    super(min, max);
    if (!min && !max) {
      throw new Error('Error creating date interval, please provide at least min or max.');
    } else if (!min) {
      this.bound = 'unbounded';
      this.type = 'leftopen';
    } else if (!max) {
      this.bound = 'unbounded';
      this.type = 'rightopen';
    } else {
      this.type = 'closed';
    }
  }

  static isSameOrAfter(one: Date, two: Date): boolean {
    return two.getTime() >= one.getTime();
  }

  static isSameOrBefore(one: Date, two: Date): boolean {
    return two.getTime() <= one.getTime();
  }

  static isAfter(one: Date, two: Date): boolean {
    return two.getTime() > one.getTime();
  }

  static isBefore(one: Date, two: Date): boolean {
    return two.getTime() < one.getTime();
  }

  private checkIsInRange(value: Date): boolean {
    switch (this.type) {
      case 'closed':
        return DateInterval.isSameOrAfter(this.min, value) && DateInterval.isSameOrBefore(this.max, value);
      case 'open':
        return DateInterval.isAfter(this.min, value) && DateInterval.isBefore(this.max, value);
      case 'leftopen':
        if (this.bound === 'bounded') {
          return DateInterval.isAfter(this.min, value) && DateInterval.isSameOrBefore(this.max, value);
        } else if (this.bound === 'unbounded') {
          return DateInterval.isSameOrBefore(this.max, value);
        }
        return false;
      case 'rightopen':
        if (this.bound === 'bounded') {
          return DateInterval.isSameOrAfter(this.min, value) && DateInterval.isBefore(this.max, value);
        } else if (this.bound === 'unbounded') {
          return DateInterval.isSameOrAfter(this.min, value);
        }
        return false;
      default:
        return false;
    }
  }

  isInRange(value: Date): boolean {
    return this.meaning === 'OR' ? this.checkIsInRange(value) : !this.checkIsInRange(value);
  }

  toString(): string {
    return String(`
    ${this.type === 'closed' || this.type === 'rightopen' ? '[' : ']'}
    ${this.bound === 'unbounded' && this.type === 'leftopen' ? '-infinity' : this.min.toISOString()}
    ,
    ${this.bound === 'unbounded' && this.type === 'rightopen' ? '+infinity' : this.max.toISOString()}
    ${this.type === 'closed' || this.type === 'leftopen' ? ']' : '['}
    `).replace(/\n/g, '').replace(/ /g, '').trim();
  }
}
