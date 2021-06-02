import { Component } from '@angular/core';

@Component({
  selector: 'app-interval-page',
  templateUrl: './interval.page.html'
})
export class IntervalPageComponent {
  createInterval = `
  import { IntervalBuilder } from '@acpaas-ui/ngx-utils';

  const interval = IntervalBuilder.numberInterval(0, 10)
                                  .closedInterval()
                                  .bounded()
                                  .build();
`;

  dateInterval = `
  import { IntervalBuilder } from '@acpaas-ui/ngx-utils';
  import { subDays } from 'date-fns';

  const today = new Date();
  const yesterday = subDays(new Date(), 1);
  const interval = IntervalBuilder.dateInterval(yesterday, today)
                                  .openInterval()
                                  .build();
  `;

  notThePast = `
  import { IntervalBuilder } from '@acpaas-ui/ngx-utils';

  const today = new Date();

  // This interval amounts to ]-infinity, today], so the past will be disabled
  const interval = IntervalBuilder.dateInterval(null, today)
                                  .leftOpenInterval()
                                  .unbounded()
                                  .not()
                                  .build();
  `;
}
