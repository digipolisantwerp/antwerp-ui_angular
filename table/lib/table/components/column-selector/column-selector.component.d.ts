import { EventEmitter } from '@angular/core';
import { TableHelperService } from '../../services/table-helper.service';
export declare class ColumnSelectorComponent {
    tableHelper: TableHelperService;
    columns: any;
    update: EventEmitter<{}>;
    id: number;
    currentTarget: any;
    constructor(tableHelper: TableHelperService);
    updateDisplay(e: any, index: any): void;
    enableChildren(parent: any): void;
    disableChildren(parent: any): void;
    move(key: any, i: any): void;
    emitColumns(): void;
}
