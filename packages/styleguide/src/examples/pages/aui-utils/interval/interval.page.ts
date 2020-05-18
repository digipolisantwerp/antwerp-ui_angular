import {Component} from '@angular/core';

@Component({
  selector: 'app-interval-page',
  templateUrl: './interval.page.html'
})
export class IntervalPageComponent {
  createInterval = `
  import {IntervalBuilder} from '@acpaas-ui/ngx-utils';

  const interval = IntervalBuilder.numberInterval(0, 10)
                                  .closedInterval()
                                  .bounded()
                                  .build();
`;

  dateInterval = `
  import {IntervalBuilder} from '@acpaas-ui/ngx-utils';
  import {Moment} from 'moment';

  const today = new Moment();
  const yesterday = (new Moment()).substract(1, 'days');
  const interval = IntervalBuilder.momentInterval(yesterday, today)
                                  .openInterval()
                                  .build();
  `;

  notThePast = `
  import {IntervalBuilder} from '@acpaas-ui/ngx-utils';
  import {Moment} from 'moment';

  const today = new Moment();

  // This interval amounts to ]-infinity, today], so the past will be disabled
  const interval = IntervalBuilder.momentInterval(null, today)
                                  .leftOpenInterval()
                                  .unbounded()
                                  .not()
                                  .build();
  `;
}
