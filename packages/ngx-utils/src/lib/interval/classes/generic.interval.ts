import {IntervalModel} from './interval.model';

export class GenericInterval extends IntervalModel<number> {
  private checkIsInRange(value: number): boolean {
    switch (this.type) {
      case 'closed':
        return value >= this.min && value <= this.max;
      case 'open':
        return value > this.min && value < this.max;
      case 'leftopen':
        if (this.bound === 'bounded') {
          return value > this.min && value <= this.max;
        } else if (this.bound === 'unbounded') {
          return value <= this.max;
        }
        return false;
      case 'rightopen':
        if (this.bound === 'bounded') {
          return value >= this.min && value < this.max;
        } else if (this.bound === 'unbounded') {
          return value >= this.min;
        }
        return false;
      default:
        return false;
    }
  }

  isInRange(value: number): boolean {
    return this.meaning === 'OR' ? this.checkIsInRange(value) : !this.checkIsInRange(value);
  }

  toString(): string {
    return String(`
    ${this.type === 'closed' || this.type === 'rightopen' ? '[' : ']'}
    ${this.bound === 'unbounded' && this.type === 'leftopen' ? '-infinity' : this.min}
    ,
    ${this.bound === 'unbounded' && this.type === 'rightopen' ? '+infinity' : this.max}
    ${this.type === 'closed' || this.type === 'leftopen' ? ']' : '['}
    `).replace(/\n/g, '').replace(/ /g, '').trim();
  }
}
