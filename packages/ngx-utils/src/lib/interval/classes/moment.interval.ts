import {IntervalModel} from './interval.model';
import {Moment} from 'moment';

export class MomentInterval extends IntervalModel<Moment> {
  isInRange(value: Moment): boolean {
    switch (this.type) {
      case 'closed':
        return value.isSameOrAfter(this.min) && value.isSameOrBefore(this.max);
      case 'open':
        return value.isAfter(this.min) && value.isBefore(this.max);
      case 'leftopen':
        if (this.bound === 'bounded') {
          return value.isAfter(this.min) && value.isSameOrBefore(this.max);
        } else if (this.bound === 'unbounded') {
          return value.isSameOrBefore(this.max);
        }
        return false;
      case 'rightopen':
        if (this.bound === 'bounded') {
          return value.isSameOrAfter(this.min) && value.isBefore(this.max);
        } else if (this.bound === 'unbounded') {
          return value.isSameOrAfter(this.min);
        }
        return false;
      default:
        return false;
    }
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
