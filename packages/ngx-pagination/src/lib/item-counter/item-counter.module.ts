import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Label, LabelsModule} from '@acpaas-ui/ngx-utils';
import {ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL} from './item-counter.conf';
import {ItemCounterComponent} from './components/item-counter/item-counter.component';
import {ItemsPerPageComponent} from './components/items-per-page/items-per-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LabelsModule,
  ],
  declarations: [
    ItemCounterComponent,
    ItemsPerPageComponent,
  ],
  exports: [
    ItemCounterComponent,
    ItemsPerPageComponent,
  ],
  providers: [
    {provide: ITEM_COUNTER_LABEL, useValue: undefined},
    {provide: ITEMS_PER_PAGE_LABEL, useValue: undefined},
  ],
})
export class ItemCounterModule {
  static forChild(
    itemCounterLabel: Label,
    itemsPerPageLabel: Label
  ) {
    return {
      ngModule: ItemCounterModule,
      providers: [
        {provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel},
        {provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel},
      ],
    };
  }
}
