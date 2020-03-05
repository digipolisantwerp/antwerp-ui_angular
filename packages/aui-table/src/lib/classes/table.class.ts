import {BehaviorSubject} from 'rxjs';

import {Filter} from '@acpaas-ui/ngx-utils';

import {OrderBy, TableColumn, TableRecord} from '../types/table.types';

export class Table {
  // Array of filters
  public filters: Filter[] = [];
  // Pagination
  public page;
  public limit;
  public lastPage;
  // Sorting
  public orderBy: OrderBy;
  public filteredData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public rows: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public columns: BehaviorSubject<any[]> = new BehaviorSubject([]);
  // Original data (json array from the server)
  private rawData: TableRecord[] = [];
  // Original columns config (from the app)
  private rawColumns: (TableColumn | string)[];

  // Init stuff...
  constructor() {
  }

  // ---------- GETTERS | SETTERS ---------- //

  public setRawData(data: any[]) {
    this.rawData = data;
    this.updateFilteredData();
    this.setLastPage();
    this.updateRows();
  }

  public setRawColumns(columns) {
    this.rawColumns = columns;
    this.updateColumns();
  }

  public setFilters(filters: Filter[]) {
    this.filters = filters;
    this.updateFilteredData();
    this.setLastPage();
    this.updateRows();
  }

  public addFilter(filter: Filter) {
    this.filters.push(filter);
    this.updateFilteredData();
    this.setLastPage();
    this.updateRows();
  }

  public setPage(i) {
    this.page = Number(i); // something weird number >< string
    this.updateRows();
  }

  public setLimit(i: number) {
    this.limit = Number(i); // something weird number >< string
    this.setLastPage();
    if (this.lastPage && this.page > this.lastPage) {
      this.page = this.lastPage;
    }
    this.updateRows();
  }

  public setOrderBy(o) {
    this.orderBy = o;
    this.updateFilteredData();
    this.setLastPage();
    this.updateRows();
  }

  // ---------- VIRTUAL PROPS ---------- //

  public getOffset() {
    return (this.page * this.limit) - this.limit;
  }

  // ---------- PROPERTY HELPERS ---------- //

  public setLastPage() {
    const d = this.filteredData.getValue();
    this.lastPage = Math.ceil(d ? d.length / this.limit : 0);
  }

  public updateRows() {
    let d = this.filteredData.getValue();

    if (this.orderBy) {
      d = this.sortData(d, this.orderBy.key, this.orderBy.order);
    }

    d = this.selectData(d, this.limit, this.getOffset());

    this.rows.next(d);
  }

  public updateColumns() {
    const c = this.filterHiddenColumns(this.rawColumns);
    this.columns.next(c);
  }

  public updateFilteredData() {
    this.filteredData.next(this.filterData(this.rawData, this.filters));
  }

  // ---------- ABSTRACT HELPERS ---------- //

  public filterData(data, filters: Filter[]) {
    let d = data.slice();

    filters.forEach((filter) => {
      d = filter.parseData(d);
    });

    return d;
  }

  public sortData(data, key, order = 'asc') {
    if (!data || !data.sort || !key) {
      return;
    }

    const d = data.slice();
    d.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return d;
  }

  public selectData(data, limit, offset) {
    if (data && limit >= 0 && offset >= 0) {
      return data.slice(offset, offset + limit);
    }
    return data;
  }

  public filterHiddenColumns(columns) {
    return columns.filter((o) => {
      return !o.hidden;
    });
  }
}
