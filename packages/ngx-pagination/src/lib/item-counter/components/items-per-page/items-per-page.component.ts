import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, Output} from '@angular/core';

import {ITEMS_PER_PAGE_LABEL} from '../../item-counter.conf';

export enum sizes {
  S = 'S',
  R = 'R',
  L = 'L',
}

@Component({
  selector: 'aui-items-per-page',
  templateUrl: './items-per-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./items-per-page.component.scss'],
})
export class ItemsPerPageComponent {
  public inputSizes = {
    S: 'a-input--small',
    R: '',
    L: 'a-input--large',
  };
  public id: string;

  @HostBinding('class.aui-items-per-page') setClass = true;

  @Input() label: any;
  @Input() size: sizes = sizes.R;
  @Input() selectOptions: number[];
  @Input() amountPerPage: number;
  @Output() returnAmount: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    @Inject(ITEMS_PER_PAGE_LABEL) label
  ) {
    this.id = 'ngx-pagination-' + Math.random().toString(36).substring(2);
    if (label && !this.label) {
      this.label = label;
    } else if (!this.label) {
      this.label = {
        singular: 'item per pagina',
        plural: 'items per pagina',
      };
    }
  }

  public setAmount(changedValue) {
    this.amountPerPage = changedValue;
    this.returnAmount.emit(this.amountPerPage);
  }
}
