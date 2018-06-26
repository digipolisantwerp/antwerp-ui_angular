/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class Table {
    constructor() {
        this.rawData = [];
        this.filters = [];
        this.filteredData = new BehaviorSubject([]);
        this.rows = new BehaviorSubject([]);
        this.columns = new BehaviorSubject([]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setRawData(data) {
        this.rawData = data;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    setRawColumns(columns) {
        this.rawColumns = columns;
        this.updateColumns();
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    setFilters(filters) {
        this.filters = filters;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    addFilter(filter) {
        this.filters.push(filter);
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setPage(i) {
        this.page = Number(i); // something weird number >< string
        this.updateRows();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setLimit(i) {
        this.limit = Number(i); // something weird number >< string
        this.setLastPage();
        if (this.lastPage && this.page > this.lastPage) {
            this.page = this.lastPage;
        }
        this.updateRows();
    }
    /**
     * @param {?} o
     * @return {?}
     */
    setOrderBy(o) {
        this.orderBy = o;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    }
    /**
     * @return {?}
     */
    getOffset() {
        return (this.page * this.limit) - this.limit;
    }
    /**
     * @return {?}
     */
    setLastPage() {
        const /** @type {?} */ d = this.filteredData.getValue();
        this.lastPage = Math.ceil(d ? d.length / this.limit : 0);
    }
    /**
     * @return {?}
     */
    updateRows() {
        let /** @type {?} */ d = this.filteredData.getValue();
        if (this.orderBy) {
            d = this.sortData(d, this.orderBy.key, this.orderBy.order);
        }
        d = this.selectData(d, this.limit, this.getOffset());
        this.rows.next(d);
    }
    /**
     * @return {?}
     */
    updateColumns() {
        const /** @type {?} */ c = this.filterHiddenColumns(this.rawColumns);
        this.columns.next(c);
    }
    /**
     * @return {?}
     */
    updateFilteredData() {
        this.filteredData.next(this.filterData(this.rawData, this.filters));
    }
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    filterData(data, filters) {
        let /** @type {?} */ d = data.slice();
        filters.forEach((filter) => {
            d = filter.parseData(d);
        });
        return d;
    }
    /**
     * @param {?} data
     * @param {?} key
     * @param {?=} order
     * @return {?}
     */
    sortData(data, key, order = 'asc') {
        if (!data || !data.sort || !key) {
            return;
        }
        const /** @type {?} */ d = data.slice();
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
    /**
     * @param {?} data
     * @param {?} limit
     * @param {?} offset
     * @return {?}
     */
    selectData(data, limit, offset) {
        if (data && limit >= 0 && offset >= 0) {
            return data.slice(offset, offset + limit);
        }
        return data;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    filterHiddenColumns(columns) {
        return columns.filter((o) => {
            return !o.hidden;
        });
    }
}
function Table_tsickle_Closure_declarations() {
    /** @type {?} */
    Table.prototype.rawData;
    /** @type {?} */
    Table.prototype.rawColumns;
    /** @type {?} */
    Table.prototype.filters;
    /** @type {?} */
    Table.prototype.page;
    /** @type {?} */
    Table.prototype.limit;
    /** @type {?} */
    Table.prototype.lastPage;
    /** @type {?} */
    Table.prototype.orderBy;
    /** @type {?} */
    Table.prototype.filteredData;
    /** @type {?} */
    Table.prototype.rows;
    /** @type {?} */
    Table.prototype.columns;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9jbGFzc2VzL3RhYmxlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNdkQsTUFBTTtJQXVCTDt1QkFyQmlDLEVBQUU7dUJBTVIsRUFBRTs0QkFVaUIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO29CQUMvQixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7dUJBQ3BCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztLQUdoRDs7Ozs7SUFJVCxVQUFVLENBQUMsSUFBVztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUFHWixhQUFhLENBQUMsT0FBTztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7OztJQUdmLFVBQVUsQ0FBQyxPQUFpQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUFHWixTQUFTLENBQUMsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7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QUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ2pCLENBQUMsQ0FBQzs7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IFRhYmxlUmVjb3JkLCBUYWJsZUNvbHVtbiwgT3JkZXJCeSB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcblx0Ly8gT3JpZ2luYWwgZGF0YSAoanNvbiBhcnJheSBmcm9tIHRoZSBzZXJ2ZXIpXG5cdHByaXZhdGUgcmF3RGF0YTogVGFibGVSZWNvcmRbXSA9IFtdO1xuXG5cdC8vIE9yaWdpbmFsIGNvbHVtbnMgY29uZmlnIChmcm9tIHRoZSBhcHApXG5cdHByaXZhdGUgcmF3Q29sdW1uczogKFRhYmxlQ29sdW1ufHN0cmluZylbXTtcblxuXHQvLyBBcnJheSBvZiBmaWx0ZXJzXG5cdHB1YmxpYyBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHBhZ2U7XG5cdHB1YmxpYyBsaW1pdDtcblx0cHVibGljIGxhc3RQYWdlO1xuXG5cdC8vIFNvcnRpbmdcblx0cHVibGljIG9yZGVyQnk6IE9yZGVyQnk7XG5cblx0cHVibGljIGZpbHRlcmVkRGF0YTogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcm93czogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgY29sdW1uczogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG5cdC8vIEluaXQgc3R1ZmYuLi5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdC8vIC0tLS0tLS0tLS0gR0VUVEVSUyB8IFNFVFRFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRSYXdEYXRhKGRhdGE6IGFueVtdKSB7XG5cdFx0dGhpcy5yYXdEYXRhID0gZGF0YTtcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRSYXdDb2x1bW5zKGNvbHVtbnMpIHtcblx0XHR0aGlzLnJhd0NvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMudXBkYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0cHVibGljIHNldEZpbHRlcnMoZmlsdGVyczogRmlsdGVyW10pIHtcblx0XHR0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXHRcdHRoaXMudXBkYXRlRmlsdGVyZWREYXRhKCk7XG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIGFkZEZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xuXHRcdHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0UGFnZShpKSB7XG5cdFx0dGhpcy5wYWdlID0gTnVtYmVyKGkpOyAvLyBzb21ldGhpbmcgd2VpcmQgbnVtYmVyID48IHN0cmluZ1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldExpbWl0KGk6IG51bWJlcikge1xuXHRcdHRoaXMubGltaXQgPSBOdW1iZXIoaSk7IC8vIHNvbWV0aGluZyB3ZWlyZCBudW1iZXIgPjwgc3RyaW5nXG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdGlmICh0aGlzLmxhc3RQYWdlICYmIHRoaXMucGFnZSA+IHRoaXMubGFzdFBhZ2UpIHtcblx0XHRcdHRoaXMucGFnZSA9IHRoaXMubGFzdFBhZ2U7XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVyQnkobykge1xuXHRcdHRoaXMub3JkZXJCeSA9IG87XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFZJUlRVQUwgUFJPUFMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBnZXRPZmZzZXQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0KSAtIHRoaXMubGltaXQ7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFBST1BFUlRZIEhFTFBFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRMYXN0UGFnZSgpIHtcblx0XHRjb25zdCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLmxhc3RQYWdlID0gTWF0aC5jZWlsKGQgPyBkLmxlbmd0aCAvIHRoaXMubGltaXQgOiAwKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVSb3dzKCkge1xuXHRcdGxldCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICh0aGlzLm9yZGVyQnkpIHtcblx0XHRcdGQgPSB0aGlzLnNvcnREYXRhKGQsIHRoaXMub3JkZXJCeS5rZXksIHRoaXMub3JkZXJCeS5vcmRlcik7XG5cdFx0fVxuXG5cdFx0ZCA9IHRoaXMuc2VsZWN0RGF0YShkLCB0aGlzLmxpbWl0LCB0aGlzLmdldE9mZnNldCgpKTtcblxuXHRcdHRoaXMucm93cy5uZXh0KGQpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUNvbHVtbnMoKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuZmlsdGVySGlkZGVuQ29sdW1ucyh0aGlzLnJhd0NvbHVtbnMpO1xuXHRcdHRoaXMuY29sdW1ucy5uZXh0KGMpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUZpbHRlcmVkRGF0YSgpIHtcblx0XHR0aGlzLmZpbHRlcmVkRGF0YS5uZXh0KHRoaXMuZmlsdGVyRGF0YSh0aGlzLnJhd0RhdGEsIHRoaXMuZmlsdGVycykpO1xuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBBQlNUUkFDVCBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblxuXHRwdWJsaWMgZmlsdGVyRGF0YShkYXRhLCBmaWx0ZXJzOiBGaWx0ZXJbXSkge1xuXHRcdGxldCBkID0gZGF0YS5zbGljZSgpO1xuXG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGQgPSBmaWx0ZXIucGFyc2VEYXRhKGQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc29ydERhdGEoZGF0YSwga2V5LCBvcmRlciA9ICdhc2MnKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFkYXRhLnNvcnQgfHwgIWtleSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGQgPSBkYXRhLnNsaWNlKCk7XG5cdFx0ZC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYVtrZXldIDwgYltrZXldKSB7XG5cdFx0XHRcdHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAtMSA6IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhW2tleV0gPiBiW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IDEgOiAtMTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAwO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0RGF0YShkYXRhLCBsaW1pdCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGRhdGEgJiYgbGltaXQgPj0gMCAmJiBvZmZzZXQgPj0gMCkge1xuXHRcdFx0cmV0dXJuIGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0cHVibGljIGZpbHRlckhpZGRlbkNvbHVtbnMoY29sdW1ucykge1xuXHRcdHJldHVybiBjb2x1bW5zLmZpbHRlcigobykgPT4ge1xuXHRcdFx0cmV0dXJuICFvLmhpZGRlbjtcblx0XHR9KTtcblx0fVxufVxuIl19