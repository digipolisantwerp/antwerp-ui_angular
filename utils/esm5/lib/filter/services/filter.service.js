/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    FilterService.prototype.filterData = /**
     * @param {?} data
     * @param {?} filters
     * @return {?}
     */
    function (data, filters) {
        filters.forEach(function (filter) {
            data = filter.parseData(data);
        });
        return data;
    };
    FilterService.decorators = [
        { type: Injectable },
    ];
    return FilterService;
}());
export { FilterService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91dGlscy8iLCJzb3VyY2VzIjpbImxpYi9maWx0ZXIvc2VydmljZXMvZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQU1uQyxrQ0FBVTs7Ozs7Y0FBQyxJQUFXLEVBQUUsT0FBaUI7UUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDdEIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQzs7O2dCQU5iLFVBQVU7O3dCQUpYOztTQUthLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2NsYXNzZXMvZmlsdGVyLmNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclNlcnZpY2Uge1xuXHRwdWJsaWMgZmlsdGVyRGF0YShkYXRhOiBhbnlbXSwgZmlsdGVyczogRmlsdGVyW10pIHtcblx0XHRmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuXHRcdFx0ZGF0YSA9IGZpbHRlci5wYXJzZURhdGEoZGF0YSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cbn1cbiJdfQ==