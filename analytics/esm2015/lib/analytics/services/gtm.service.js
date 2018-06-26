/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { GTM_CONFIG } from '../analytics.conf';
export class GTMService {
    /**
     * @param {?} windowService
     * @param {?} config
     */
    constructor(windowService, config) {
        this.windowService = windowService;
        this.config = config;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    addToDataLayer(data) {
        this.windowService.dataLayer.push(data);
    }
    /**
     * @param {?} event
     * @param {?=} data
     * @return {?}
     */
    trigger(event, data = {}) {
        const /** @type {?} */ eventData = Object.assign({}, data, { 'event': event });
        this.addToDataLayer(eventData);
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    triggerPageView(data = {}) {
        this.trigger(this.config.PAGE_VIEW.TRIGGER, data);
    }
    /**
     * @param {?} category
     * @param {?} action
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    triggerEvent(category, action, label, value) {
        this.trigger(this.config.EVENT.TRIGGER, {
            [this.config.EVENT.CATEGORY]: category,
            [this.config.EVENT.ACTION]: action,
            [this.config.EVENT.LABEL]: label,
            [this.config.EVENT.VALUE]: value,
        });
    }
}
GTMService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GTMService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GTM_CONFIG,] }] }
];
function GTMService_tsickle_Closure_declarations() {
    /** @type {?} */
    GTMService.prototype.windowService;
    /** @type {?} */
    GTMService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3RtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmFseXRpY3MvIiwic291cmNlcyI6WyJsaWIvYW5hbHl0aWNzL3NlcnZpY2VzL2d0bS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSS9DLE1BQU07Ozs7O0lBQ0wsWUFDeUIsYUFBYSxFQUNULE1BQWlCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBQ1QsV0FBTSxHQUFOLE1BQU0sQ0FBVztLQUMxQzs7Ozs7SUFFRyxjQUFjLENBQUMsSUFBSTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFHbEMsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFJLEdBQUcsRUFBRTtRQUN0Qyx1QkFBTSxTQUFTLHFCQUNYLElBQUksSUFDUCxPQUFPLEVBQUUsS0FBSyxHQUNkLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7SUFHekIsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFHNUMsWUFBWSxDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEtBQWMsRUFBRSxLQUFjO1FBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUTtZQUN0QyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU07WUFDbEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLO1lBQ2hDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSztTQUNoQyxDQUFDLENBQUM7Ozs7WUE3QkosVUFBVTs7Ozs0Q0FHUixNQUFNLFNBQUMsTUFBTTs0Q0FDYixNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgR1RNX0NPTkZJRyB9IGZyb20gJy4uL2FuYWx5dGljcy5jb25mJztcbmltcG9ydCB7IEdUTUNvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2FuYWx5dGljcy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHVE1TZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93U2VydmljZSxcblx0XHRASW5qZWN0KEdUTV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBHVE1Db25maWdcblx0KSB7fVxuXG5cdHB1YmxpYyBhZGRUb0RhdGFMYXllcihkYXRhKSB7XG5cdFx0dGhpcy53aW5kb3dTZXJ2aWNlLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuXHR9XG5cblx0cHVibGljIHRyaWdnZXIoZXZlbnQ6IHN0cmluZywgZGF0YSA9IHt9KSB7XG5cdFx0Y29uc3QgZXZlbnREYXRhID0ge1xuXHRcdFx0Li4uZGF0YSxcblx0XHRcdCdldmVudCc6IGV2ZW50LFxuXHRcdH07XG5cdFx0dGhpcy5hZGRUb0RhdGFMYXllcihldmVudERhdGEpO1xuXHR9XG5cblx0cHVibGljIHRyaWdnZXJQYWdlVmlldyhkYXRhID0ge30pIHtcblx0XHR0aGlzLnRyaWdnZXIodGhpcy5jb25maWcuUEFHRV9WSUVXLlRSSUdHRVIsIGRhdGEpO1xuXHR9XG5cblx0cHVibGljIHRyaWdnZXJFdmVudChjYXRlZ29yeTogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyKSB7XG5cdFx0dGhpcy50cmlnZ2VyKHRoaXMuY29uZmlnLkVWRU5ULlRSSUdHRVIsIHtcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5DQVRFR09SWV06IGNhdGVnb3J5LFxuXHRcdFx0W3RoaXMuY29uZmlnLkVWRU5ULkFDVElPTl06IGFjdGlvbixcblx0XHRcdFt0aGlzLmNvbmZpZy5FVkVOVC5MQUJFTF06IGxhYmVsLFxuXHRcdFx0W3RoaXMuY29uZmlnLkVWRU5ULlZBTFVFXTogdmFsdWUsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==