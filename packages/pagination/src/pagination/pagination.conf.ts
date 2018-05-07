import { InjectionToken } from '@angular/core';

import { PaginationLabels } from './pagination.types';

export const PAGINATION_LABELS = new InjectionToken<PaginationLabels>('paginationLabels');

export const DEFAULT_TRANSLATIONS: PaginationLabels = {
    PAGINATION_LABEL: '%{currentPage} of %{total}'
};
