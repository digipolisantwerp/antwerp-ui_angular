/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var Table = /** @class */ (function () {
    // Init stuff...
    function Table() {
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
    Table.prototype.setRawData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.rawData = data;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Table.prototype.setRawColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.rawColumns = columns;
        this.updateColumns();
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    Table.prototype.setFilters = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        this.filters = filters;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    Table.prototype.addFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.filters.push(filter);
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Table.prototype.setPage = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.page = Number(i); // something weird number >< string
        this.updateRows();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Table.prototype.setLimit = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.limit = Number(i); // something weird number >< string
        this.setLastPage();
        if (this.lastPage && this.page > this.lastPage) {
            this.page = this.lastPage;
        }
        this.updateRows();
    };
    /**
     * @param {?} o
     * @return {?}
     */
    Table.prototype.setOrderBy = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        this.orderBy = o;
        this.updateFilteredData();
        this.setLastPage();
        this.updateRows();
    };
    /**
     * @return {?}
     */
    Table.prototype.getOffset = /**
     * @return {?}
     */
    function () {
        return (this.page * this.limit) - this.limit;
    };
    /**
     * @return {?}
     */
    Table.prototype.setLastPage = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ d = this.filteredData.getValue();
        this.lastPage = Math.ceil(d ? d.length / this.limit : 0);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateRows = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ d = this.filteredData.getValue();
        if (this.orderBy) {
            d = this.sortData(d, this.orderBy.key, this.orderBy.order);
        }
        d = this.selectData(d, this.limit, this.getOffset());
        this.rows.next(d);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateColumns = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ c = this.filterHiddenColumns(this.rawColumns);
        this.columns.next(c);
    };
    /**
     * @return {?}
     */
    Table.prototype.updateFilteredData = /**
     * @return {?}
     */
    function () {
        this.filteredData.next(this.filterData(this.rawData, this.filters));
    };
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    Table.prototype.filterData = /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    function (data, filters) {
        var /** @type {?} */ d = data.slice();
        filters.forEach(function (filter) {
            d = filter.parseData(d);
        });
        return d;
    };
    /**
     * @param {?} data
     * @param {?} key
     * @param {?=} order
     * @return {?}
     */
    Table.prototype.sortData = /**
     * @param {?} data
     * @param {?} key
     * @param {?=} order
     * @return {?}
     */
    function (data, key, order) {
        if (order === void 0) { order = 'asc'; }
        if (!data || !data.sort || !key) {
            return;
        }
        var /** @type {?} */ d = data.slice();
        d.sort(function (a, b) {
            if (a[key] < b[key]) {
                return order === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return d;
    };
    /**
     * @param {?} data
     * @param {?} limit
     * @param {?} offset
     * @return {?}
     */
    Table.prototype.selectData = /**
     * @param {?} data
     * @param {?} limit
     * @param {?} offset
     * @return {?}
     */
    function (data, limit, offset) {
        if (data && limit >= 0 && offset >= 0) {
            return data.slice(offset, offset + limit);
        }
        return data;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Table.prototype.filterHiddenColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns.filter(function (o) {
            return !o.hidden;
        });
    };
    return Table;
}());
export { Table };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9jbGFzc2VzL3RhYmxlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNdkQsSUFBQTtJQXNCQyxnQkFBZ0I7SUFDaEI7dUJBckJpQyxFQUFFO3VCQU1SLEVBQUU7NEJBVWlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO3VCQUNwQixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7S0FHaEQ7Ozs7O0lBSVQsMEJBQVU7Ozs7Y0FBQyxJQUFXO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7OztJQUdaLDZCQUFhOzs7O2NBQUMsT0FBTztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7OztJQUdmLDBCQUFVOzs7O2NBQUMsT0FBaUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7O0lBR1oseUJBQVM7Ozs7Y0FBQyxNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNu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TztRQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNqQixDQUFDLENBQUM7O2dCQTVKTDtJQThKQyxDQUFBO0FBeEpELGlCQXdKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IFRhYmxlUmVjb3JkLCBUYWJsZUNvbHVtbiwgT3JkZXJCeSB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcblx0Ly8gT3JpZ2luYWwgZGF0YSAoanNvbiBhcnJheSBmcm9tIHRoZSBzZXJ2ZXIpXG5cdHByaXZhdGUgcmF3RGF0YTogVGFibGVSZWNvcmRbXSA9IFtdO1xuXG5cdC8vIE9yaWdpbmFsIGNvbHVtbnMgY29uZmlnIChmcm9tIHRoZSBhcHApXG5cdHByaXZhdGUgcmF3Q29sdW1uczogKFRhYmxlQ29sdW1ufHN0cmluZylbXTtcblxuXHQvLyBBcnJheSBvZiBmaWx0ZXJzXG5cdHB1YmxpYyBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHBhZ2U7XG5cdHB1YmxpYyBsaW1pdDtcblx0cHVibGljIGxhc3RQYWdlO1xuXG5cdC8vIFNvcnRpbmdcblx0cHVibGljIG9yZGVyQnk6IE9yZGVyQnk7XG5cblx0cHVibGljIGZpbHRlcmVkRGF0YTogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcm93czogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgY29sdW1uczogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG5cdC8vIEluaXQgc3R1ZmYuLi5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdC8vIC0tLS0tLS0tLS0gR0VUVEVSUyB8IFNFVFRFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRSYXdEYXRhKGRhdGE6IGFueVtdKSB7XG5cdFx0dGhpcy5yYXdEYXRhID0gZGF0YTtcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuXHRcdHRoaXMuc2V0TGFzdFBhZ2UoKTtcblx0XHR0aGlzLnVwZGF0ZVJvd3MoKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRSYXdDb2x1bW5zKGNvbHVtbnMpIHtcblx0XHR0aGlzLnJhd0NvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMudXBkYXRlQ29sdW1ucygpO1xuXHR9XG5cblx0cHVibGljIHNldEZpbHRlcnMoZmlsdGVyczogRmlsdGVyW10pIHtcblx0XHR0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXHRcdHRoaXMudXBkYXRlRmlsdGVyZWREYXRhKCk7XG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIGFkZEZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xuXHRcdHRoaXMuZmlsdGVycy5wdXNoKGZpbHRlcik7XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0UGFnZShpKSB7XG5cdFx0dGhpcy5wYWdlID0gTnVtYmVyKGkpOyAvLyBzb21ldGhpbmcgd2VpcmQgbnVtYmVyID48IHN0cmluZ1xuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldExpbWl0KGk6IG51bWJlcikge1xuXHRcdHRoaXMubGltaXQgPSBOdW1iZXIoaSk7IC8vIHNvbWV0aGluZyB3ZWlyZCBudW1iZXIgPjwgc3RyaW5nXG5cdFx0dGhpcy5zZXRMYXN0UGFnZSgpO1xuXHRcdGlmICh0aGlzLmxhc3RQYWdlICYmIHRoaXMucGFnZSA+IHRoaXMubGFzdFBhZ2UpIHtcblx0XHRcdHRoaXMucGFnZSA9IHRoaXMubGFzdFBhZ2U7XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlUm93cygpO1xuXHR9XG5cblx0cHVibGljIHNldE9yZGVyQnkobykge1xuXHRcdHRoaXMub3JkZXJCeSA9IG87XG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJlZERhdGEoKTtcblx0XHR0aGlzLnNldExhc3RQYWdlKCk7XG5cdFx0dGhpcy51cGRhdGVSb3dzKCk7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFZJUlRVQUwgUFJPUFMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBnZXRPZmZzZXQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0KSAtIHRoaXMubGltaXQ7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tIFBST1BFUlRZIEhFTFBFUlMgLS0tLS0tLS0tLSAvL1xuXG5cdHB1YmxpYyBzZXRMYXN0UGFnZSgpIHtcblx0XHRjb25zdCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLmxhc3RQYWdlID0gTWF0aC5jZWlsKGQgPyBkLmxlbmd0aCAvIHRoaXMubGltaXQgOiAwKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVSb3dzKCkge1xuXHRcdGxldCBkID0gdGhpcy5maWx0ZXJlZERhdGEuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICh0aGlzLm9yZGVyQnkpIHtcblx0XHRcdGQgPSB0aGlzLnNvcnREYXRhKGQsIHRoaXMub3JkZXJCeS5rZXksIHRoaXMub3JkZXJCeS5vcmRlcik7XG5cdFx0fVxuXG5cdFx0ZCA9IHRoaXMuc2VsZWN0RGF0YShkLCB0aGlzLmxpbWl0LCB0aGlzLmdldE9mZnNldCgpKTtcblxuXHRcdHRoaXMucm93cy5uZXh0KGQpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUNvbHVtbnMoKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuZmlsdGVySGlkZGVuQ29sdW1ucyh0aGlzLnJhd0NvbHVtbnMpO1xuXHRcdHRoaXMuY29sdW1ucy5uZXh0KGMpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUZpbHRlcmVkRGF0YSgpIHtcblx0XHR0aGlzLmZpbHRlcmVkRGF0YS5uZXh0KHRoaXMuZmlsdGVyRGF0YSh0aGlzLnJhd0RhdGEsIHRoaXMuZmlsdGVycykpO1xuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBBQlNUUkFDVCBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblxuXHRwdWJsaWMgZmlsdGVyRGF0YShkYXRhLCBmaWx0ZXJzOiBGaWx0ZXJbXSkge1xuXHRcdGxldCBkID0gZGF0YS5zbGljZSgpO1xuXG5cdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcblx0XHRcdGQgPSBmaWx0ZXIucGFyc2VEYXRhKGQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc29ydERhdGEoZGF0YSwga2V5LCBvcmRlciA9ICdhc2MnKSB7XG5cdFx0aWYgKCFkYXRhIHx8ICFkYXRhLnNvcnQgfHwgIWtleSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGQgPSBkYXRhLnNsaWNlKCk7XG5cdFx0ZC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYVtrZXldIDwgYltrZXldKSB7XG5cdFx0XHRcdHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAtMSA6IDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhW2tleV0gPiBiW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IDEgOiAtMTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAwO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGQ7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0RGF0YShkYXRhLCBsaW1pdCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGRhdGEgJiYgbGltaXQgPj0gMCAmJiBvZmZzZXQgPj0gMCkge1xuXHRcdFx0cmV0dXJuIGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0cHVibGljIGZpbHRlckhpZGRlbkNvbHVtbnMoY29sdW1ucykge1xuXHRcdHJldHVybiBjb2x1bW5zLmZpbHRlcigobykgPT4ge1xuXHRcdFx0cmV0dXJuICFvLmhpZGRlbjtcblx0XHR9KTtcblx0fVxufVxuIl19