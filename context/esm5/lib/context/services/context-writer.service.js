/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT } from '../context.conf';
var ContextWriterService = /** @class */ (function () {
    function ContextWriterService(metaConfig, document, titleService) {
        this.metaConfig = metaConfig;
        this.document = document;
        this.titleService = titleService;
        this.metaConfig = tslib_1.__assign({}, CONTEXT_CONFIG_DEFAULT, metaConfig);
    }
    /**
     * @param {?=} meta
     * @return {?}
     */
    ContextWriterService.prototype.updateMetaTags = /**
     * @param {?=} meta
     * @return {?}
     */
    function (meta) {
        var _this = this;
        if (meta === void 0) { meta = {}; }
        if (meta.disableUpdate) {
            return;
        }
        var /** @type {?} */ newConfig = tslib_1.__assign({}, meta, this.metaConfig.defaults, { title: this.getTitle(meta) });
        Object.keys(newConfig).forEach(function (key) {
            _this.setTag(key, newConfig);
        });
    };
    /**
     * @param {?} key
     * @param {?=} values
     * @return {?}
     */
    ContextWriterService.prototype.setTag = /**
     * @param {?} key
     * @param {?=} values
     * @return {?}
     */
    function (key, values) {
        if (values === void 0) { values = {}; }
        switch (key) {
            case 'title':
            case 'titleSuffix':
                return this.setTitle(values["title"], values["titleSuffix"]);
            case 'favIcon':
                return this.setFavIcon(values["favIcon"]);
            default:
                return this.setTagDefault(key, values[key]);
        }
    };
    /**
     * @param {?=} title
     * @param {?=} titleSuffix
     * @return {?}
     */
    ContextWriterService.prototype.setTitle = /**
     * @param {?=} title
     * @param {?=} titleSuffix
     * @return {?}
     */
    function (title, titleSuffix) {
        if (titleSuffix === void 0) { titleSuffix = this.metaConfig.defaults.titleSuffix; }
        var /** @type {?} */ titleStr = this.isDefined(title) ? title : this.metaConfig.defaults.title;
        if (this.metaConfig.useTitleSuffix && this.isDefined(titleSuffix)) {
            titleStr += titleSuffix;
        }
        this.titleService.setTitle(titleStr);
    };
    /**
     * @param {?} favIcon
     * @return {?}
     */
    ContextWriterService.prototype.setFavIcon = /**
     * @param {?} favIcon
     * @return {?}
     */
    function (favIcon) {
        this.updateFavIcon('apple-touch-icon', favIcon);
        this.updateFavIcon('shortcut icon', favIcon);
    };
    /**
     * @param {?} rel
     * @param {?} href
     * @param {?=} attrs
     * @return {?}
     */
    ContextWriterService.prototype.updateFavIcon = /**
     * @param {?} rel
     * @param {?} href
     * @param {?=} attrs
     * @return {?}
     */
    function (rel, href, attrs) {
        var /** @type {?} */ oldIcon = this.document.querySelector("link[rel=\"" + rel + "\"]");
        if (oldIcon && oldIcon.getAttribute('href') === href) {
            return;
        }
        var /** @type {?} */ newIcon = this.document.createElement('link');
        newIcon.setAttribute('rel', rel);
        newIcon.setAttribute('href', href);
        if (attrs) {
            Object.keys(attrs).forEach(function (key) {
                newIcon.setAttribute(key, attrs[key]);
            });
        }
        if (oldIcon) {
            this.document.head.removeChild(oldIcon);
        }
        this.document.head.appendChild(newIcon);
    };
    /**
     * @param {?} tag
     * @param {?} content
     * @return {?}
     */
    ContextWriterService.prototype.setTagDefault = /**
     * @param {?} tag
     * @param {?} content
     * @return {?}
     */
    function (tag, content) {
        var /** @type {?} */ tagElement = this.getOrCreateMetaTag(tag);
        var /** @type {?} */ tagContent = this.isDefined(content) ? content : (this.metaConfig.defaults[tag] || '');
        tagElement.setAttribute('content', tagContent);
        if (tag === 'description') {
            var /** @type {?} */ ogDescElement = this.getOrCreateMetaTag('og:description');
            ogDescElement.setAttribute('content', tagContent);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ContextWriterService.prototype.isDefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value !== 'undefined';
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ContextWriterService.prototype.getOrCreateMetaTag = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ el = this.document.querySelector("meta[name='" + name + "']");
        if (!el) {
            el = this.document.createElement('meta');
            el.setAttribute('name', name);
            this.document.head.appendChild(el);
        }
        return el;
    };
    /**
     * @param {?=} meta
     * @return {?}
     */
    ContextWriterService.prototype.getTitle = /**
     * @param {?=} meta
     * @return {?}
     */
    function (meta) {
        if (meta === void 0) { meta = {}; }
        var /** @type {?} */ shouldExtend = this.metaConfig.extendTitle && meta.parent;
        return shouldExtend ? [meta.title, meta.parent].join(this.metaConfig.titleDelimiter) : meta.title;
    };
    ContextWriterService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ContextWriterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Title }
    ]; };
    return ContextWriterService;
}());
export { ContextWriterService };
function ContextWriterService_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextWriterService.prototype.metaConfig;
    /** @type {?} */
    ContextWriterService.prototype.document;
    /** @type {?} */
    ContextWriterService.prototype.titleService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC13cml0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRleHQvIiwic291cmNlcyI6WyJsaWIvY29udGV4dC9zZXJ2aWNlcy9jb250ZXh0LXdyaXRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBS3hFLDhCQUNpQyxVQUF5QixFQUMvQixRQUFhLEVBQy9CO1FBRndCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixpQkFBWSxHQUFaLFlBQVk7UUFFcEIsSUFBSSxDQUFDLFVBQVUsd0JBQ1gsc0JBQXNCLEVBQ3RCLFVBQVUsQ0FDYixDQUFDO0tBQ0Y7Ozs7O0lBRU0sNkNBQWM7Ozs7Y0FBQyxJQUFjOztRQUFkLHFCQUFBLEVBQUEsU0FBYztRQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUM7U0FDUDtRQUVELHFCQUFNLFNBQVMsd0JBQ1gsSUFBSSxFQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FDMUIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7Ozs7Ozs7SUFH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QUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7Z0JBN0duRyxVQUFVOzs7O2dEQUdSLE1BQU0sU0FBQyxjQUFjO2dEQUNyQixNQUFNLFNBQUMsUUFBUTtnQkFWVCxLQUFLOzsrQkFEZDs7U0FRYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENPTlRFWFRfQ09ORklHLCBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi4vY29udGV4dC5jb25mJztcbmltcG9ydCB7IENvbnRleHRDb25maWcgfSBmcm9tICcuLi90eXBlcy9jb250ZXh0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRleHRXcml0ZXJTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT05URVhUX0NPTkZJRykgcHJpdmF0ZSBtZXRhQ29uZmlnOiBDb250ZXh0Q29uZmlnLFxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcblx0XHRwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGVcblx0KSB7XG5cdFx0dGhpcy5tZXRhQ29uZmlnID0ge1xuXHRcdFx0Li4uQ09OVEVYVF9DT05GSUdfREVGQVVMVCxcblx0XHRcdC4uLm1ldGFDb25maWcsXG5cdFx0fTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVNZXRhVGFncyhtZXRhOiBhbnkgPSB7fSk6IHZvaWQge1xuXHRcdGlmIChtZXRhLmRpc2FibGVVcGRhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdDb25maWcgPSB7XG5cdFx0XHQuLi5tZXRhLFxuXHRcdFx0Li4udGhpcy5tZXRhQ29uZmlnLmRlZmF1bHRzLFxuXHRcdFx0dGl0bGU6IHRoaXMuZ2V0VGl0bGUobWV0YSksXG5cdFx0fTtcblxuXHRcdE9iamVjdC5rZXlzKG5ld0NvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5zZXRUYWcoa2V5LCBuZXdDb25maWcpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHNldFRhZyhrZXk6IHN0cmluZywgdmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge30pOiB2b2lkIHtcblx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0Y2FzZSAndGl0bGUnOlxuXHRcdFx0Y2FzZSAndGl0bGVTdWZmaXgnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRUaXRsZSh2YWx1ZXMudGl0bGUsIHZhbHVlcy50aXRsZVN1ZmZpeCk7XG5cdFx0XHRjYXNlICdmYXZJY29uJzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0RmF2SWNvbih2YWx1ZXMuZmF2SWNvbik7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRUYWdEZWZhdWx0KGtleSwgdmFsdWVzW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0VGl0bGUodGl0bGU/OiBzdHJpbmcsIHRpdGxlU3VmZml4OiBzdHJpbmcgPSB0aGlzLm1ldGFDb25maWcuZGVmYXVsdHMudGl0bGVTdWZmaXgpOiB2b2lkIHtcblx0XHRsZXQgdGl0bGVTdHIgPSB0aGlzLmlzRGVmaW5lZCh0aXRsZSkgPyB0aXRsZSA6IHRoaXMubWV0YUNvbmZpZy5kZWZhdWx0cy50aXRsZTtcblxuXHRcdGlmICh0aGlzLm1ldGFDb25maWcudXNlVGl0bGVTdWZmaXggJiYgdGhpcy5pc0RlZmluZWQodGl0bGVTdWZmaXgpKSB7XG5cdFx0XHR0aXRsZVN0ciArPSB0aXRsZVN1ZmZpeDtcblx0XHR9XG5cblx0XHR0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZVN0cik7XG5cdH1cblxuXHRwcml2YXRlIHNldEZhdkljb24oZmF2SWNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVGYXZJY29uKCdhcHBsZS10b3VjaC1pY29uJywgZmF2SWNvbik7XG5cdFx0dGhpcy51cGRhdGVGYXZJY29uKCdzaG9ydGN1dCBpY29uJywgZmF2SWNvbik7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUZhdkljb24ocmVsOiBzdHJpbmcsIGhyZWY6IHN0cmluZywgYXR0cnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG5cdFx0Y29uc3Qgb2xkSWNvbjogSFRNTEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwiJHtyZWx9XCJdYCk7XG5cblx0XHRpZiAob2xkSWNvbiAmJiBvbGRJY29uLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBocmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3SWNvbjogSFRNTEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblx0XHRuZXdJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgcmVsKTtcblx0XHRuZXdJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG5cdFx0aWYgKGF0dHJzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChvbGRJY29uKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQob2xkSWNvbik7XG5cdFx0fVxuXG5cdFx0dGhpcy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5ld0ljb24pO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRUYWdEZWZhdWx0KHRhZzogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCB0YWdFbGVtZW50ID0gdGhpcy5nZXRPckNyZWF0ZU1ldGFUYWcodGFnKTtcblx0XHRjb25zdCB0YWdDb250ZW50ID0gdGhpcy5pc0RlZmluZWQoY29udGVudCkgPyBjb250ZW50IDogKHRoaXMubWV0YUNvbmZpZy5kZWZhdWx0c1t0YWddIHx8ICcnKTtcblxuXHRcdHRhZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGFnQ29udGVudCk7XG5cblx0XHRpZiAodGFnID09PSAnZGVzY3JpcHRpb24nKSB7XG5cdFx0XHRjb25zdCBvZ0Rlc2NFbGVtZW50ID0gdGhpcy5nZXRPckNyZWF0ZU1ldGFUYWcoJ29nOmRlc2NyaXB0aW9uJyk7XG5cdFx0XHRvZ0Rlc2NFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRhZ0NvbnRlbnQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBCb29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcblx0fVxuXG5cdHByaXZhdGUgZ2V0T3JDcmVhdGVNZXRhVGFnKG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcblx0XHRsZXQgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW25hbWU9JyR7bmFtZX0nXWApO1xuXHRcdGlmICghZWwpIHtcblx0XHRcdGVsID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcblx0XHRcdHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VGl0bGUobWV0YTogYW55ID0ge30pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNob3VsZEV4dGVuZCA9IHRoaXMubWV0YUNvbmZpZy5leHRlbmRUaXRsZSAmJiBtZXRhLnBhcmVudDtcblxuXHRcdHJldHVybiBzaG91bGRFeHRlbmQgPyBbbWV0YS50aXRsZSwgbWV0YS5wYXJlbnRdLmpvaW4odGhpcy5tZXRhQ29uZmlnLnRpdGxlRGVsaW1pdGVyKSA6IG1ldGEudGl0bGU7XG5cdH1cbn1cbiJdfQ==