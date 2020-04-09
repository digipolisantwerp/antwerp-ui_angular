import {InjectionToken} from '@angular/core';

import {Label} from '@acpaas-ui/ngx-utils';

export const ITEM_COUNTER_LABEL = new InjectionToken<Label>('itemCounterLabels');
export const ITEMS_PER_PAGE_LABEL = new InjectionToken<Label>('itemsPerPageLabels');
