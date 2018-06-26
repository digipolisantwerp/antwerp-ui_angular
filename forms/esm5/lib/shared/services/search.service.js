/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SearchService = /** @class */ (function () {
    function SearchService() {
        this.matchItemWithSearchString = function (item, searchString) {
            return String(item).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        };
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    SearchService.prototype.search = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ query = options.hasOwnProperty('query') ? options.query : '';
        var /** @type {?} */ minLength = options.hasOwnProperty('minLength') ? options.minLength : 0;
        var /** @type {?} */ key = options.hasOwnProperty('key') ? options.key : '';
        if ((!query && options.showAllByDefault) || query.length < minLength) {
            return tslib_1.__spread(data);
        }
        return tslib_1.__spread(data).filter(function (item) {
            if (key && !item.hasOwnProperty(key)) {
                return console.error("\"" + key + "\" does not exist in item " + JSON.stringify(item, null, 2));
            }
            if (key) {
                return _this.matchItemWithSearchString(item[key], query);
            }
            return _this.matchItemWithSearchString(item, query);
        });
    };
    SearchService.decorators = [
        { type: Injectable },
    ];
    return SearchService;
}());
export { SearchService };
function SearchService_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchService.prototype.matchItemWithSearchString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7eUNBNEJOLFVBQUMsSUFBUyxFQUFFLFlBQVk7WUFDM0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0U7Ozs7Ozs7SUF4Qk0sOEJBQU07Ozs7O2NBQUMsSUFBVyxFQUFFLE9BQTJCOztRQUEzQix3QkFBQSxFQUFBLFlBQTJCO1FBQ3JELHFCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkUscUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxxQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sa0JBQUssSUFBSSxFQUFFO1NBQ2pCO1FBRUQsTUFBTSxDQUFDLGlCQUFJLElBQUksRUFBRSxNQUFNLENBQUMsVUFBQSxJQUFJO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFJLEdBQUcsa0NBQTRCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUcsQ0FBQyxDQUFDO2FBQ3pGO1lBRUQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN4RDtZQUVELE1BQU0sQ0FBQyxLQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQzs7O2dCQXJCSixVQUFVOzt3QkFKWDs7U0FLYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvc2VhcmNoLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuXHRwdWJsaWMgc2VhcmNoKGRhdGE6IGFueVtdLCBvcHRpb25zOiBTZWFyY2hPcHRpb25zID0ge30pOiBhbnlbXSB7XG5cdFx0Y29uc3QgcXVlcnkgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdxdWVyeScpID8gb3B0aW9ucy5xdWVyeSA6ICcnO1xuXHRcdGNvbnN0IG1pbkxlbmd0aCA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21pbkxlbmd0aCcpID8gb3B0aW9ucy5taW5MZW5ndGggOiAwO1xuXHRcdGNvbnN0IGtleSA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2tleScpID8gb3B0aW9ucy5rZXkgOiAnJztcblxuXHRcdGlmICgoIXF1ZXJ5ICYmIG9wdGlvbnMuc2hvd0FsbEJ5RGVmYXVsdCkgfHwgcXVlcnkubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gWy4uLmRhdGFdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbLi4uZGF0YV0uZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKGtleSAmJiAhaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGBcIiR7a2V5fVwiIGRvZXMgbm90IGV4aXN0IGluIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShpdGVtLCBudWxsLCAyKX1gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaEl0ZW1XaXRoU2VhcmNoU3RyaW5nKGl0ZW1ba2V5XSwgcXVlcnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5tYXRjaEl0ZW1XaXRoU2VhcmNoU3RyaW5nKGl0ZW0sIHF1ZXJ5KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgbWF0Y2hJdGVtV2l0aFNlYXJjaFN0cmluZyA9IChpdGVtOiBhbnksIHNlYXJjaFN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBTdHJpbmcoaXRlbSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFN0cmluZy50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuXHR9XG59XG4iXX0=