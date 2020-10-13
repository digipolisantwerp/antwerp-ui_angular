import {Type} from '@angular/core';

export interface Cell {
  data: any;
  metadata?: any;
}

export interface CellWithMetadata {
  instance: Type<Cell>;
  metadata: any;
}

export type ConstructableCell = Type<Cell> | CellWithMetadata;

export interface OrderBy {
  key: string;
  order: string;
}

export interface TableRecord {
  any;
}

export type TableColumnFormat = (o: string, key?: string, item?: any) => any;
export type TableColumnClass = (o: string, key?: string, item?: any) => any;

export interface TableColumn {
  label: string;
  value?: string;
  component?: ConstructableCell;
  headerComponent?: any;
  format?: TableColumnFormat;
  hidden?: boolean;
  disabled?: boolean;
  disableSorting?: boolean;
  classList?: string[];
  columnClass?: TableColumnClass;
}
