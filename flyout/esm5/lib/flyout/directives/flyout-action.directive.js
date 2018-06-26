/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, HostListener, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlyoutDirective } from './flyout.directive';
var FlyoutActionDirective = /** @class */ (function () {
    function FlyoutActionDirective(flyout, platformId, elementRef) {
        var _this = this;
        this.flyout = flyout;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.class = true;
        /**
         * This property is needed for dropdown not to open and instantly closed
         * because the click event will be fired after the focus event so the click event will close the flyout
         */
        this.openedByFocus = false;
        // Define this method in the constructor so "this" points to "this class"
        this.closeDropdownOnOutsideClick = function (event) {
            _this.closeIfInClosableZone(event);
        };
    }
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isPlatformBrowser()) {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.flyout.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.flyout.isOpened() && this.flyout.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.openedByFocus = true;
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (event.relatedTarget && !this.flyout.isInClosableZone(/** @type {?} */ (event.relatedTarget))
            && event.relatedTarget !== this.elementRef.nativeElement) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.flyout.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (!this.flyout.isOpened()) {
            return;
        }
        this.flyout.close();
        document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.checkIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.flyout.isInClosableZone(/** @type {?} */ (event.target))
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FlyoutActionDirective.prototype.closeIfInClosableZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.checkIfInClosableZone(event)) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    };
    /**
     * @return {?}
     */
    FlyoutActionDirective.prototype.isPlatformBrowser = /**
     * @return {?}
     */
    function () {
        return isPlatformBrowser(this.platformId);
    };
    FlyoutActionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyoutAction]',
                    exportAs: 'auiFlyoutAction',
                },] },
    ];
    /** @nocollapse */
    FlyoutActionDirective.ctorParameters = function () { return [
        { type: FlyoutDirective, decorators: [{ type: Host }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    FlyoutActionDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.aui-flyout-action',] }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return FlyoutActionDirective;
}());
export { FlyoutActionDirective };
function FlyoutActionDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutActionDirective.prototype.class;
    /**
     * This property is needed for dropdown not to open and instantly closed
     * because the click event will be fired after the focus event so the click event will close the flyout
     * @type {?}
     */
    FlyoutActionDirective.prototype.openedByFocus;
    /** @type {?} */
    FlyoutActionDirective.prototype.closeDropdownOnOutsideClick;
    /** @type {?} */
    FlyoutActionDirective.prototype.flyout;
    /** @type {?} */
    FlyoutActionDirective.prototype.platformId;
    /** @type {?} */
    FlyoutActionDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0L2RpcmVjdGl2ZXMvZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLElBQUksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQWtCcEQsK0JBQ2dCLE1BQXVCLEVBQ1QsVUFBa0IsRUFDdkM7UUFIVCxpQkFTQztRQVJlLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ1QsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxlQUFVLEdBQVYsVUFBVTtxQkFaNkIsSUFBSTs7Ozs7NkJBTTVCLEtBQUs7O1FBUzVCLElBQUksQ0FBQywyQkFBMkIsR0FBRyxVQUFDLEtBQVk7WUFDL0MsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDLENBQUM7S0FDRjs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTtLQUNEOzs7O0lBR0QsdUNBQU87OztJQURQO1FBRUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENB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aXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgSG9zdCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi9mbHlvdXQuZGlyZWN0aXZlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0QWN0aW9uXScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0QWN0aW9uJyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS1mbHlvdXQtYWN0aW9uJykgY2xhc3MgPSB0cnVlO1xuXG5cdC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgbmVlZGVkIGZvciBkcm9wZG93biBub3QgdG8gb3BlbiBhbmQgaW5zdGFudGx5IGNsb3NlZFxuICAgICAqIGJlY2F1c2UgdGhlIGNsaWNrIGV2ZW50IHdpbGwgYmUgZmlyZWQgYWZ0ZXIgdGhlIGZvY3VzIGV2ZW50IHNvIHRoZSBjbGljayBldmVudCB3aWxsIGNsb3NlIHRoZSBmbHlvdXRcbiAgICAgKi9cblx0cHJpdmF0ZSBvcGVuZWRCeUZvY3VzID0gZmFsc2U7XG5cdHByaXZhdGUgY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEhvc3QoKSBwdWJsaWMgZmx5b3V0OiBGbHlvdXREaXJlY3RpdmUsXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge1xuXHRcdC8vIERlZmluZSB0aGlzIG1ldGhvZCBpbiB0aGUgY29uc3RydWN0b3Igc28gXCJ0aGlzXCIgcG9pbnRzIHRvIFwidGhpcyBjbGFzc1wiXG5cdFx0dGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlSWZJbkNsb3NhYmxlWm9uZShldmVudCk7XG5cdFx0fTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0b25DbGljaygpIHtcblx0XHRpZiAodGhpcy5mbHlvdXQuYWN0aXZhdGVPbkZvY3VzICYmIHRoaXMub3BlbmVkQnlGb2N1cykge1xuXHRcdFx0dGhpcy5vcGVuZWRCeUZvY3VzID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkgJiYgdGhpcy5mbHlvdXQudG9nZ2xlQ2xpY2spIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuXHRvbkZvY3VzKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5lZEJ5Rm9jdXMgPSB0cnVlO1xuXHRcdHRoaXMuZmx5b3V0Lm9wZW4oKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcblx0b25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiAhdGhpcy5mbHlvdXQuaXNJbkNsb3NhYmxlWm9uZSg8SFRNTEVsZW1lbnQ+IGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cdFx0XHQmJiBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9wZW4oKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZmx5b3V0Lm9wZW4oKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZSgpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWZJbkNsb3NhYmxlWm9uZShldmVudCkge1xuXHRcdHJldHVybiAhdGhpcy5mbHlvdXQuaXNJbkNsb3NhYmxlWm9uZSg8SFRNTEVsZW1lbnQ+IGV2ZW50LnRhcmdldClcblx0XHRcdFx0JiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuXHRcdFx0XHQmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VJZkluQ2xvc2FibGVab25lKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY2hlY2tJZkluQ2xvc2FibGVab25lKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNQbGF0Zm9ybUJyb3dzZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG5cdH1cbn1cbiJdfQ==