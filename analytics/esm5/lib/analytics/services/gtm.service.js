/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { GTM_CONFIG } from '../analytics.conf';
var GTMService = /** @class */ (function () {
    function GTMService(windowService, config) {
        this.windowService = windowService;
        this.config = config;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    GTMService.prototype.addToDataLayer = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.windowService.dataLayer.push(data);
    };
    /**
     * @param {?} event
     * @param {?=} data
     * @return {?}
     */
    GTMService.prototype.trigger = /**
     * @param {?} event
     * @param {?=} data
     * @return {?}
     */
    function (event, data) {
        if (data === void 0) { data = {}; }
        var /** @type {?} */ eventData = tslib_1.__assign({}, data, { 'event': event });
        this.addToDataLayer(eventData);
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    GTMService.prototype.triggerPageView = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        if (data === void 0) { data = {}; }
        this.trigger(this.config.PAGE_VIEW.TRIGGER, data);
    };
    /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    GTMService.prototype.triggerEvent = /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    function (category, action, label, value) {
        this.trigger(this.config.EVENT.TRIGGER, (_a = {},
            _a[this.config.EVENT.CATEGORY] = category,
            _a[this.config.EVENT.ACTION] = action,
            _a[this.config.EVENT.LABEL] = label,
            _a[this.config.EVENT.VALUE] = value,
            _a));
        var _a;
    };
    GTMService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GTMService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [GTM_CONFIG,] }] }
    ]; };
    return GTMService;
}());
export { GTMService };
function GTMService_tsickle_Closure_declarations() {
    /** @type {?} */
    GTMService.prototype.windowService;
    /** @type {?} */
    GTMService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmFseXRpY3MvIiwic291cmNlcyI6WyJsaWIvYW5hbHl0aWNzL3NlcnZpY2VzL2d0bS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFLOUMsb0JBQ3lCLGFBQWEsRUFDVCxNQUFpQjtRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQUNULFdBQU0sR0FBTixNQUFNLENBQVc7S0FDMUM7Ozs7O0lBRUcsbUNBQWM7Ozs7Y0FBQyxJQUFJO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQUdsQyw0QkFBTzs7Ozs7Y0FBQyxLQUFhLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUN0QyxxQkFBTSxTQUFTLHdCQUNYLElBQUksSUFDUCxPQUFPLEVBQUUsS0FBSyxHQUNkLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7SUFHekIsb0NBQWU7Ozs7Y0FBQyxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFHNUMsaUNBQVk7Ozs7Ozs7Y0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsS0FBYztRQUNuRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDckMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUcsUUFBUTtZQUN0QyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRyxNQUFNO1lBQ2xDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFHLEtBQUs7WUFDaEMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUcsS0FBSztnQkFDL0IsQ0FBQzs7OztnQkE3QkosVUFBVTs7OztnREFHUixNQUFNLFNBQUMsTUFBTTtnREFDYixNQUFNLFNBQUMsVUFBVTs7cUJBWHBCOztTQVFhLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7IEdUTV9DT05GSUcgfSBmcm9tICcuLi9hbmFseXRpY3MuY29uZic7XG5pbXBvcnQgeyBHVE1Db25maWcgfSBmcm9tICcuLi90eXBlcy9hbmFseXRpY3MudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR1RNU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvd1NlcnZpY2UsXG5cdFx0QEluamVjdChHVE1fQ09ORklHKSBwcml2YXRlIGNvbmZpZzogR1RNQ29uZmlnXG5cdCkge31cblxuXHRwdWJsaWMgYWRkVG9EYXRhTGF5ZXIoZGF0YSkge1xuXHRcdHRoaXMud2luZG93U2VydmljZS5kYXRhTGF5ZXIucHVzaChkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyKGV2ZW50OiBzdHJpbmcsIGRhdGEgPSB7fSkge1xuXHRcdGNvbnN0IGV2ZW50RGF0YSA9IHtcblx0XHRcdC4uLmRhdGEsXG5cdFx0XHQnZXZlbnQnOiBldmVudCxcblx0XHR9O1xuXHRcdHRoaXMuYWRkVG9EYXRhTGF5ZXIoZXZlbnREYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyUGFnZVZpZXcoZGF0YSA9IHt9KSB7XG5cdFx0dGhpcy50cmlnZ2VyKHRoaXMuY29uZmlnLlBBR0VfVklFVy5UUklHR0VSLCBkYXRhKTtcblx0fVxuXG5cdHB1YmxpYyB0cmlnZ2VyRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCB2YWx1ZT86IG51bWJlcikge1xuXHRcdHRoaXMudHJpZ2dlcih0aGlzLmNvbmZpZy5FVkVOVC5UUklHR0VSLCB7XG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuQ0FURUdPUlldOiBjYXRlZ29yeSxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5BQ1RJT05dOiBhY3Rpb24sXG5cdFx0XHRbdGhpcy5jb25maWcuRVZFTlQuTEFCRUxdOiBsYWJlbCxcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5WQUxVRV06IHZhbHVlLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=