import { Component } from '@angular/core';
import { Cell } from '@acpaas-ui/ngx-table';

@Component({
  template: `
    <button type="button" class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
      <aui-icon name="ai-view-1"></aui-icon>
    </button>
  `,
})
export class TableActionComponent implements Cell {
  public data: any;
}
