import {IntervalModel} from './interval.model';
import {Moment} from 'moment';

export class MomentInterval extends IntervalModel<Moment> {
  isInRange(value: Moment): boolean {
    return false;
  }
}
