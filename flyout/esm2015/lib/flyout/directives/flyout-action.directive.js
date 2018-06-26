/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, HostListener, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlyoutDirective } from './flyout.directive';
export class FlyoutActionDirective {
    /**
     * @param {?} flyout
     * @param {?} platformId
     * @param {?} elementRef
     */
    constructor(flyout, platformId, elementRef) {
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
        this.closeDropdownOnOutsideClick = (event) => {
            this.closeIfInClosableZone(event);
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isPlatformBrowser()) {
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    onClick() {
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
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.openedByFocus = true;
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (event.relatedTarget && !this.flyout.isInClosableZone(/** @type {?} */ (event.relatedTarget))
            && event.relatedTarget !== this.elementRef.nativeElement) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.flyout.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.flyout.isOpened()) {
            return;
        }
        this.flyout.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (!this.flyout.isOpened()) {
            return;
        }
        this.flyout.close();
        document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkIfInClosableZone(event) {
        return !this.flyout.isInClosableZone(/** @type {?} */ (event.target))
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeIfInClosableZone(event) {
        if (!this.isPlatformBrowser()) {
            return;
        }
        if (this.checkIfInClosableZone(event)) {
            this.flyout.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }
    /**
     * @return {?}
     */
    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
    }
}
FlyoutActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyoutAction]',
                exportAs: 'auiFlyoutAction',
            },] },
];
/** @nocollapse */
FlyoutActionDirective.ctorParameters = () => [
    { type: FlyoutDirective, decorators: [{ type: Host }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
FlyoutActionDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.aui-flyout-action',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mbHlvdXQvIiwic291cmNlcyI6WyJsaWIvZmx5b3V0L2RpcmVjdGl2ZXMvZmx5b3V0LWFjdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLElBQUksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3JELE1BQU07Ozs7OztJQVdMLFlBQ2dCLE1BQXVCLEVBQ1QsVUFBa0IsRUFDdkM7UUFGTyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNULGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsZUFBVSxHQUFWLFVBQVU7cUJBWjZCLElBQUk7Ozs7OzZCQU01QixLQUFLOztRQVM1QixJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEMsQ0FBQztLQUNGOzs7O0lBRUQsV0FBVztRQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTtLQUNEOzs7O0lBR0QsT0FBTztRQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lB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QUFDLE1BQU0sQ0FBQyxnQkFBZ0IsbUJBQWUsS0FBSyxDQUFDLE1BQU0sRUFBQztlQUMzRCxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtlQUM5QyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OztJQUdwRCxxQkFBcUIsQ0FBQyxLQUFZO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQztTQUNQO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFOzs7OztJQUdNLGlCQUFpQjtRQUN4QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O1lBL0gzQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjthQUMzQjs7OztZQU5RLGVBQWUsdUJBbUJyQixJQUFJO1lBQ29DLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBdEJELFVBQVU7OztvQkFXNUIsV0FBVyxTQUFDLHlCQUF5QjtzQkEwQnJDLFlBQVksU0FBQyxPQUFPO3NCQWNwQixZQUFZLFNBQUMsT0FBTztxQkFnQnBCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgSG9zdCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmx5b3V0RGlyZWN0aXZlIH0gZnJvbSAnLi9mbHlvdXQuZGlyZWN0aXZlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRmx5b3V0QWN0aW9uXScsXG5cdGV4cG9ydEFzOiAnYXVpRmx5b3V0QWN0aW9uJyxcbn0pXG5leHBvcnQgY2xhc3MgRmx5b3V0QWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS1mbHlvdXQtYWN0aW9uJykgY2xhc3MgPSB0cnVlO1xuXG5cdC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgbmVlZGVkIGZvciBkcm9wZG93biBub3QgdG8gb3BlbiBhbmQgaW5zdGFudGx5IGNsb3NlZFxuICAgICAqIGJlY2F1c2UgdGhlIGNsaWNrIGV2ZW50IHdpbGwgYmUgZmlyZWQgYWZ0ZXIgdGhlIGZvY3VzIGV2ZW50IHNvIHRoZSBjbGljayBldmVudCB3aWxsIGNsb3NlIHRoZSBmbHlvdXRcbiAgICAgKi9cblx0cHJpdmF0ZSBvcGVuZWRCeUZvY3VzID0gZmFsc2U7XG5cdHByaXZhdGUgY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEhvc3QoKSBwdWJsaWMgZmx5b3V0OiBGbHlvdXREaXJlY3RpdmUsXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge1xuXHRcdC8vIERlZmluZSB0aGlzIG1ldGhvZCBpbiB0aGUgY29uc3RydWN0b3Igc28gXCJ0aGlzXCIgcG9pbnRzIHRvIFwidGhpcyBjbGFzc1wiXG5cdFx0dGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2sgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlSWZJbkNsb3NhYmxlWm9uZShldmVudCk7XG5cdFx0fTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0b25DbGljaygpIHtcblx0XHRpZiAodGhpcy5mbHlvdXQuYWN0aXZhdGVPbkZvY3VzICYmIHRoaXMub3BlbmVkQnlGb2N1cykge1xuXHRcdFx0dGhpcy5vcGVuZWRCeUZvY3VzID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkgJiYgdGhpcy5mbHlvdXQudG9nZ2xlQ2xpY2spIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuXHRvbkZvY3VzKCkge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5lZEJ5Rm9jdXMgPSB0cnVlO1xuXHRcdHRoaXMuZmx5b3V0Lm9wZW4oKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcblx0b25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiAhdGhpcy5mbHlvdXQuaXNJbkNsb3NhYmxlWm9uZSg8SFRNTEVsZW1lbnQ+IGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cdFx0XHQmJiBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0aWYgKHRoaXMuZmx5b3V0LmlzT3BlbmVkKCkpIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9wZW4oKSB7XG5cdFx0aWYgKCF0aGlzLmlzUGxhdGZvcm1Ccm93c2VyKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZmx5b3V0Lm9wZW4oKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bk9uT3V0c2lkZUNsaWNrLCB0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyBjbG9zZSgpIHtcblx0XHRpZiAoIXRoaXMuaXNQbGF0Zm9ybUJyb3dzZXIoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5mbHlvdXQuaXNPcGVuZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZmx5b3V0LmNsb3NlKCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25Pbk91dHNpZGVDbGljaywgdHJ1ZSk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrSWZJbkNsb3NhYmxlWm9uZShldmVudCkge1xuXHRcdHJldHVybiAhdGhpcy5mbHlvdXQuaXNJbkNsb3NhYmxlWm9uZSg8SFRNTEVsZW1lbnQ+IGV2ZW50LnRhcmdldClcblx0XHRcdFx0JiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuXHRcdFx0XHQmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VJZkluQ2xvc2FibGVab25lKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc1BsYXRmb3JtQnJvd3NlcigpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY2hlY2tJZkluQ2xvc2FibGVab25lKGV2ZW50KSkge1xuXHRcdFx0dGhpcy5mbHlvdXQuY2xvc2UoKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3duT25PdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNQbGF0Zm9ybUJyb3dzZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG5cdH1cbn1cbiJdfQ==