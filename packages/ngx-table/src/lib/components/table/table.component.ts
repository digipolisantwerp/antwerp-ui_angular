import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHelperService} from '../../services/table-helper.service';
import {OrderBy, TableColumn} from '../../types/table.types';
import * as DEFAULT_MESSAGES from '../table.messages';

@Component({
  selector: 'aui-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TableComponent {
  @Input() rows: any[] = [];
  @Input() columns: (TableColumn | string)[] = [];
  @Input() loading = false;
  @Input() responsive = true;
  @Input() hasClickAction = false;
  @Input() activeSorting: OrderBy; // Just a property to use in the template, not functional
  @Input() noDataMessage = DEFAULT_MESSAGES.NO_DATA;
  @Input() loadDataMessage = DEFAULT_MESSAGES.LOAD_DATA;
  @Input() noColumnsMessage = DEFAULT_MESSAGES.NO_COLUMNS;

  @Output() orderBy: EventEmitter<any> = new EventEmitter();
  @Output() rowClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    public tableHelper: TableHelperService
  ) {
  }

  public sort(key, order): void {
    const prop = this.tableHelper.getValue(key);
    this.activeSorting = {key: prop, order};
    this.orderBy.emit({key: prop, order});
  }

  public clickRow(rowData: any): void {
    if (this.hasClickAction) {
      this.rowClicked.emit(rowData);
    }
  }
}
