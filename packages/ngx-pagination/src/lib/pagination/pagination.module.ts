import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationLabels} from './types/pagination.types';
import {PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT} from './pagination.conf';
import {PaginationComponent} from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaginationComponent,
  ],
  exports: [
    PaginationComponent,
  ],
  providers: [
    {provide: PAGINATION_LABELS, useValue: PAGINATION_LABELS_DEFAULT},
  ],
})
export class PaginationModule {
  static forChild(
    paginationLabels: PaginationLabels
  ): ModuleWithProviders {
    return {
      ngModule: PaginationModule,
      providers: [
        {provide: PAGINATION_LABELS, useValue: paginationLabels},
      ],
    };
  }
}
