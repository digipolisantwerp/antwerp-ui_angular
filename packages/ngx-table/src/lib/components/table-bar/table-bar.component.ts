import {Component, DoCheck, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Filter} from '@acpaas-ui/ngx-utils';

@Component({
  selector: 'aui-table-bar',
  templateUrl: './table-bar.component.html',
})
export class TableBarComponent implements DoCheck {
  @Input() filters: Filter[] = [];
  @Input() testFilter: Filter;
  @Output() filter = new EventEmitter();
  public open = false;
  public invisibleItems = false;

  @ViewChild('ref', {static: true}) ref;

  public ngDoCheck() {
    this.countInvisibleItems();
  }

  public isInVisible(rectContainer, rectChild) {
    return rectContainer.bottom < rectChild.top;
  }

  public countInvisibleItems() {
    const rectContainer = this.ref.nativeElement.getBoundingClientRect();
    const childNodes = this.ref.nativeElement.childNodes;

    for (let i = childNodes.length - 1; i >= 0; i--) {
      const o = childNodes[i];
      if (o.nodeName === 'AUI-TABLE-BAR-ITEM' && o.getBoundingClientRect) {
        const rectChild = o.getBoundingClientRect();
        if (this.isInVisible(rectContainer, rectChild)) {
          this.invisibleItems = true;
          break;
        }
      }

      if (i === 0) {
        this.invisibleItems = false;
      }
    }
  }

  public toggle() {
    this.open = !this.open;
  }
}
