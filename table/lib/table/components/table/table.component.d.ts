import { EventEmitter } from '@angular/core';
import { TableHelperService } from '../../services/table-helper.service';
import { TableColumn, OrderBy } from '../../types/table.types';
export declare class TableComponent {
    tableHelper: TableHelperService;
    rows: any[];
    columns: (TableColumn | string)[];
    loading: boolean;
    responsive: boolean;
    hasClickAction: boolean;
    activeSorting: OrderBy;
    noDataMessage: string;
    loadDataMessage: string;
    noColumnsMessage: string;
    orderBy: EventEmitter<any>;
    rowClicked: EventEmitter<any>;
    constructor(tableHelper: TableHelperService);
    sort(key: any, order: any): void;
    clickRow(rowData: any): void;
}
