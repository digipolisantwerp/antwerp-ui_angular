import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { PaginationLabels } from './types/pagination.types';
import {
  PAGINATION_LABELS,
  PAGINATION_LABELS_DEFAULT,
} from './pagination.conf';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [
    { provide: PAGINATION_LABELS, useValue: PAGINATION_LABELS_DEFAULT },
  ],
})
export class PaginationModule {
  static forChild(
    paginationLabels: PaginationLabels
  ): ModuleWithProviders<any> {
    return {
      ngModule: PaginationModule,
      providers: [{ provide: PAGINATION_LABELS, useValue: paginationLabels }],
    };
  }
}
