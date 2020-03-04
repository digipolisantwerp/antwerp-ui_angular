import {InjectionToken} from '@angular/core';

import {PaginationLabels} from './types/pagination.types';

export const PAGINATION_LABELS = new InjectionToken<PaginationLabels>('paginationLabels');

export const PAGINATION_LABELS_DEFAULT: PaginationLabels = {
  PAGINATION_LABEL: '%{currentPage} of %{total}',
};
