import {Injectable} from '@angular/core';
import {TableColumn} from '../types/table.types';

@Injectable()
export class TableHelperService {
  public getLabel(key: (TableColumn | string)): string {
    return key.hasOwnProperty('label') ? (key as TableColumn).label : key as string;
  }

  public getValue(key: (TableColumn | string)): string {
    return key.hasOwnProperty('value') ? (key as TableColumn).value : key as string;
  }

  public getClass(key: (TableColumn | string)): string {
    return key.hasOwnProperty('classList') ? (key as TableColumn).classList.join(' ') : key as string;
  }

  public formatValue(item, key, index): any {
    const value = item[this.getValue(key)];
    return key.format ? key.format(value, key, item, index) : value;
  }

  public getColumnClass(item, key, index): any {
    const value = item[this.getValue(key)];
    return key.columnClass ? key.columnClass(value, key, item) : '';
  }
}
