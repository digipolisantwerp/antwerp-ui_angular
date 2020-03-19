import {Component} from '@angular/core';
import {Cell} from '@acpaas-ui/ngx-table';
import {FlyoutSize} from '@acpaas-ui/ngx-flyout';

@Component({
  template: `
		<button type="button" class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
			<span class="fa fa-eye"></span>
		</button>
	`,
})
export class TableActionComponent implements Cell {
  public data: any;
  public size: FlyoutSize = FlyoutSize.Medium;
}
