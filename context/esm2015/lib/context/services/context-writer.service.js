/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT } from '../context.conf';
export class ContextWriterService {
    /**
     * @param {?} metaConfig
     * @param {?} document
     * @param {?} titleService
     */
    constructor(metaConfig, document, titleService) {
        this.metaConfig = metaConfig;
        this.document = document;
        this.titleService = titleService;
        this.metaConfig = Object.assign({}, CONTEXT_CONFIG_DEFAULT, metaConfig);
    }
    /**
     * @param {?=} meta
     * @return {?}
     */
    updateMetaTags(meta = {}) {
        if (meta.disableUpdate) {
            return;
        }
        const /** @type {?} */ newConfig = Object.assign({}, meta, this.metaConfig.defaults, { title: this.getTitle(meta) });
        Object.keys(newConfig).forEach(key => {
            this.setTag(key, newConfig);
        });
    }
    /**
     * @param {?} key
     * @param {?=} values
     * @return {?}
     */
    setTag(key, values = {}) {
        switch (key) {
            case 'title':
            case 'titleSuffix':
                return this.setTitle(values["title"], values["titleSuffix"]);
            case 'favIcon':
                return this.setFavIcon(values["favIcon"]);
            default:
                return this.setTagDefault(key, values[key]);
        }
    }
    /**
     * @param {?=} title
     * @param {?=} titleSuffix
     * @return {?}
     */
    setTitle(title, titleSuffix = this.metaConfig.defaults.titleSuffix) {
        let /** @type {?} */ titleStr = this.isDefined(title) ? title : this.metaConfig.defaults.title;
        if (this.metaConfig.useTitleSuffix && this.isDefined(titleSuffix)) {
            titleStr += titleSuffix;
        }
        this.titleService.setTitle(titleStr);
    }
    /**
     * @param {?} favIcon
     * @return {?}
     */
    setFavIcon(favIcon) {
        this.updateFavIcon('apple-touch-icon', favIcon);
        this.updateFavIcon('shortcut icon', favIcon);
    }
    /**
     * @param {?} rel
     * @param {?} href
     * @param {?=} attrs
     * @return {?}
     */
    updateFavIcon(rel, href, attrs) {
        const /** @type {?} */ oldIcon = this.document.querySelector(`link[rel="${rel}"]`);
        if (oldIcon && oldIcon.getAttribute('href') === href) {
            return;
        }
        const /** @type {?} */ newIcon = this.document.createElement('link');
        newIcon.setAttribute('rel', rel);
        newIcon.setAttribute('href', href);
        if (attrs) {
            Object.keys(attrs).forEach((key) => {
                newIcon.setAttribute(key, attrs[key]);
            });
        }
        if (oldIcon) {
            this.document.head.removeChild(oldIcon);
        }
        this.document.head.appendChild(newIcon);
    }
    /**
     * @param {?} tag
     * @param {?} content
     * @return {?}
     */
    setTagDefault(tag, content) {
        const /** @type {?} */ tagElement = this.getOrCreateMetaTag(tag);
        const /** @type {?} */ tagContent = this.isDefined(content) ? content : (this.metaConfig.defaults[tag] || '');
        tagElement.setAttribute('content', tagContent);
        if (tag === 'description') {
            const /** @type {?} */ ogDescElement = this.getOrCreateMetaTag('og:description');
            ogDescElement.setAttribute('content', tagContent);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDefined(value) {
        return typeof value !== 'undefined';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getOrCreateMetaTag(name) {
        let /** @type {?} */ el = this.document.querySelector(`meta[name='${name}']`);
        if (!el) {
            el = this.document.createElement('meta');
            el.setAttribute('name', name);
            this.document.head.appendChild(el);
        }
        return el;
    }
    /**
     * @param {?=} meta
     * @return {?}
     */
    getTitle(meta = {}) {
        const /** @type {?} */ shouldExtend = this.metaConfig.extendTitle && meta.parent;
        return shouldExtend ? [meta.title, meta.parent].join(this.metaConfig.titleDelimiter) : meta.title;
    }
}
ContextWriterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ContextWriterService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Title }
];
function ContextWriterService_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextWriterService.prototype.metaConfig;
    /** @type {?} */
    ContextWriterService.prototype.document;
    /** @type {?} */
    ContextWriterService.prototype.titleService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC13cml0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRleHQvIiwic291cmNlcyI6WyJsaWIvY29udGV4dC9zZXJ2aWNlcy9jb250ZXh0LXdyaXRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUl6RSxNQUFNOzs7Ozs7SUFDTCxZQUNpQyxVQUF5QixFQUMvQixRQUFhLEVBQy9CO1FBRndCLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixpQkFBWSxHQUFaLFlBQVk7UUFFcEIsSUFBSSxDQUFDLFVBQVUscUJBQ1gsc0JBQXNCLEVBQ3RCLFVBQVUsQ0FDYixDQUFDO0tBQ0Y7Ozs7O0lBRU0sY0FBYyxDQUFDLE9BQVksRUFBRTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUM7U0FDUDtRQUVELHVCQUFNLFNBQVMscUJBQ1gsSUFBSSxFQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FDMUIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FBQzs7Ozs7OztJQUdHLE1B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Q0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7OztZQTdHbkcsVUFBVTs7Ozs0Q0FHUixNQUFNLFNBQUMsY0FBYzs0Q0FDckIsTUFBTSxTQUFDLFFBQVE7WUFWVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDT05URVhUX0NPTkZJRywgQ09OVEVYVF9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4uL2NvbnRleHQuY29uZic7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0V3JpdGVyU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVEVYVF9DT05GSUcpIHByaXZhdGUgbWV0YUNvbmZpZzogQ29udGV4dENvbmZpZyxcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG5cdCkge1xuXHRcdHRoaXMubWV0YUNvbmZpZyA9IHtcblx0XHRcdC4uLkNPTlRFWFRfQ09ORklHX0RFRkFVTFQsXG5cdFx0XHQuLi5tZXRhQ29uZmlnLFxuXHRcdH07XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlTWV0YVRhZ3MobWV0YTogYW55ID0ge30pOiB2b2lkIHtcblx0XHRpZiAobWV0YS5kaXNhYmxlVXBkYXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3Q29uZmlnID0ge1xuXHRcdFx0Li4ubWV0YSxcblx0XHRcdC4uLnRoaXMubWV0YUNvbmZpZy5kZWZhdWx0cyxcblx0XHRcdHRpdGxlOiB0aGlzLmdldFRpdGxlKG1ldGEpLFxuXHRcdH07XG5cblx0XHRPYmplY3Qua2V5cyhuZXdDb25maWcpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuc2V0VGFnKGtleSwgbmV3Q29uZmlnKTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9KTogdm9pZCB7XG5cdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdGNhc2UgJ3RpdGxlJzpcblx0XHRcdGNhc2UgJ3RpdGxlU3VmZml4Jzpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGl0bGUodmFsdWVzLnRpdGxlLCB2YWx1ZXMudGl0bGVTdWZmaXgpO1xuXHRcdFx0Y2FzZSAnZmF2SWNvbic6XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldEZhdkljb24odmFsdWVzLmZhdkljb24pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0VGFnRGVmYXVsdChrZXksIHZhbHVlc1trZXldKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nLCB0aXRsZVN1ZmZpeDogc3RyaW5nID0gdGhpcy5tZXRhQ29uZmlnLmRlZmF1bHRzLnRpdGxlU3VmZml4KTogdm9pZCB7XG5cdFx0bGV0IHRpdGxlU3RyID0gdGhpcy5pc0RlZmluZWQodGl0bGUpID8gdGl0bGUgOiB0aGlzLm1ldGFDb25maWcuZGVmYXVsdHMudGl0bGU7XG5cblx0XHRpZiAodGhpcy5tZXRhQ29uZmlnLnVzZVRpdGxlU3VmZml4ICYmIHRoaXMuaXNEZWZpbmVkKHRpdGxlU3VmZml4KSkge1xuXHRcdFx0dGl0bGVTdHIgKz0gdGl0bGVTdWZmaXg7XG5cdFx0fVxuXG5cdFx0dGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGl0bGVTdHIpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRGYXZJY29uKGZhdkljb246IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignYXBwbGUtdG91Y2gtaWNvbicsIGZhdkljb24pO1xuXHRcdHRoaXMudXBkYXRlRmF2SWNvbignc2hvcnRjdXQgaWNvbicsIGZhdkljb24pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVGYXZJY29uKHJlbDogc3RyaW5nLCBocmVmOiBzdHJpbmcsIGF0dHJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZEljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cIiR7cmVsfVwiXWApO1xuXG5cdFx0aWYgKG9sZEljb24gJiYgb2xkSWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0ljb246IEhUTUxFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsIHJlbCk7XG5cdFx0bmV3SWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuXHRcdGlmIChhdHRycykge1xuXHRcdFx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdG5ld0ljb24uc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAob2xkSWNvbikge1xuXHRcdFx0dGhpcy5kb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKG9sZEljb24pO1xuXHRcdH1cblxuXHRcdHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdJY29uKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFnRGVmYXVsdCh0YWc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgdGFnRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKHRhZyk7XG5cdFx0Y29uc3QgdGFnQ29udGVudCA9IHRoaXMuaXNEZWZpbmVkKGNvbnRlbnQpID8gY29udGVudCA6ICh0aGlzLm1ldGFDb25maWcuZGVmYXVsdHNbdGFnXSB8fCAnJyk7XG5cblx0XHR0YWdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRhZ0NvbnRlbnQpO1xuXG5cdFx0aWYgKHRhZyA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuXHRcdFx0Y29uc3Qgb2dEZXNjRWxlbWVudCA9IHRoaXMuZ2V0T3JDcmVhdGVNZXRhVGFnKCdvZzpkZXNjcmlwdGlvbicpO1xuXHRcdFx0b2dEZXNjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0YWdDb250ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzRGVmaW5lZCh2YWx1ZTogYW55KTogQm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXHRwcml2YXRlIGdldE9yQ3JlYXRlTWV0YVRhZyhuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG5cdFx0bGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPScke25hbWV9J11gKTtcblx0XHRpZiAoIWVsKSB7XG5cdFx0XHRlbCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG5cdFx0XHR0aGlzLmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRwcml2YXRlIGdldFRpdGxlKG1ldGE6IGFueSA9IHt9KTogc3RyaW5nIHtcblx0XHRjb25zdCBzaG91bGRFeHRlbmQgPSB0aGlzLm1ldGFDb25maWcuZXh0ZW5kVGl0bGUgJiYgbWV0YS5wYXJlbnQ7XG5cblx0XHRyZXR1cm4gc2hvdWxkRXh0ZW5kID8gW21ldGEudGl0bGUsIG1ldGEucGFyZW50XS5qb2luKHRoaXMubWV0YUNvbmZpZy50aXRsZURlbGltaXRlcikgOiBtZXRhLnRpdGxlO1xuXHR9XG59XG4iXX0=