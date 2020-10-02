import {ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnChanges, OnInit} from '@angular/core';

import {ITEM_COUNTER_LABEL} from '../../item-counter.conf';

@Component({
  selector: 'aui-item-counter',
  templateUrl: './item-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './item-counter.component.scss',
  ],
})
export class ItemCounterComponent implements OnInit, OnChanges {
  @HostBinding('class.aui-item-counter') setClass = true;

  @Input() currentPage: number;
  @Input() totalAmount: number;
  @Input() amountPerPage: number;
  @Input() label: any;

  public currentFrom = 1;
  public currentTo = this.amountPerPage;

  constructor(@Inject(ITEM_COUNTER_LABEL) label: any) {
    if (label && !this.label) {
      this.label = label;
    } else if (!this.label) {
      this.label = {
        singular: '%{currentFrom} - %{currentTo} van %{totalAmount} item',
        plural: '%{currentFrom} - %{currentTo} van %{totalAmount} items',
      };
    }
  }

  public setFromTo() {
    this.currentFrom = (this.amountPerPage * (this.currentPage - 1)) + 1;
    /* tslint:disable:max-line-length */
    this.currentTo = (this.amountPerPage * this.currentPage) <= this.totalAmount ? this.amountPerPage * this.currentPage : this.totalAmount;
    /* tslint:enable:max-line-length */
  }

  public ngOnInit() {
    this.setFromTo();
  }

  public ngOnChanges() {
    this.setFromTo();
  }
}
