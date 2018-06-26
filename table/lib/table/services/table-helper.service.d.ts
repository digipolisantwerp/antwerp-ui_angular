import { TableColumn } from '../types/table.types';
export declare class TableHelperService {
    getLabel(key: (TableColumn | string)): string;
    getValue(key: (TableColumn | string)): string;
    getClass(key: (TableColumn | string)): string;
    formatValue(item: any, key: any, index: any): any;
}
