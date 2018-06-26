/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, ContentChild, Output, EventEmitter, Input, HostBinding, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlyoutZoneDirective } from './flyout-zone.directive';
import { FlyoutService } from '../services/flyout.service';
import { FlyoutSize } from '../types/flyout.types';
export class FlyoutDirective {
    /**
     * @param {?} elementRef
     * @param {?} flyoutService
     */
    constructor(elementRef, flyoutService) {
        this.elementRef = elementRef;
        this.flyoutService = flyoutService;
        this.flyoutClass = true;
        this.class = '';
        this.size = FlyoutSize.Auto;
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.flyoutOpened = false;
        this.destroyed$ = new Subject();
        this.element = this.elementRef.nativeElement;
        this.flyoutService.subject
            .pipe(takeUntil(this.destroyed$))
            .subscribe((res) => {
            this.close();
        });
    }
    /**
     * @return {?}
     */
    get flyoutAlignRight() {
        return this.align === 'right';
    }
    /**
     * @return {?}
     */
    get flyoutSmall() {
        return this.size === 'small';
    }
    /**
     * @return {?}
     */
    get flyoutMedium() {
        return this.size === 'medium';
    }
    /**
     * @return {?}
     */
    get flyoutLarge() {
        return this.size === 'large';
    }
    /**
     * @return {?}
     */
    get flyoutFull() {
        return this.size === 'full';
    }
    /**
     * @return {?}
     */
    get flyoutOpen() {
        return this.flyoutOpened;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next(true);
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.flyoutOpened) {
            this.flyoutOpened = true;
            this.opened.emit(undefined);
        }
    }
    /**
     * @return {?}
     */
    close() {
        if (this.flyoutOpened) {
            this.flyoutOpened = false;
            this.closed.emit(undefined);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    isInClosableZone(element) {
        if (!this.flyoutZone) {
            return false;
        }
        return this.flyoutZone.contains(element);
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.flyoutOpened;
    }
}
FlyoutDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiFlyout]',
                exportAs: 'auiFlyout',
            },] },
];
/** @nocollapse */
FlyoutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: FlyoutService }
];
FlyoutDirective.propDecorators = {
    flyoutClass: [{ type: HostBinding, args: ['class.m-flyout',] }],
    flyoutAlignRight: [{ type: HostBinding, args: ['class.m-flyout--right',] }],
    flyoutSmall: [{ type: HostBinding, args: ['class.m-flyout--sm',] }],
    flyoutMedium: [{ type: HostBinding, args: ['class.m-flyout--md',] }],
    flyoutLarge: [{ type: HostBinding, args: ['class.m-flyout--lg',] }],
    flyoutFull: [{ type: HostBinding, args: ['class.m-flyout--full',] }],
    flyoutOpen: [{ type: HostBinding, args: ['class.is-open',] }],
    class: [{ type: Input }],
    size: [{ type: Input }],
    align: [{ type: Input }],
    toggleClick: [{ type: Input }],
    activateOnFocus: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    flyoutZone: [{ type: ContentChild, args: [FlyoutZoneDirective,] }]
};
function FlyoutDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FlyoutDirective.prototype.flyoutClass;
    /** @type {?} */
    FlyoutDirective.prototype.class;
    /** @type {?} */
    FlyoutDirective.prototype.size;
    /** @type {?} */
    FlyoutDirective.prototype.align;
    /** @type {?} */
    FlyoutDirective.prototype.toggleClick;
    /** @type {?} */
    FlyoutDirective.prototype.activateOnFocus;
    /** @type {?} */
    FlyoutDirective.prototype.opened;
    /** @type {?} */
    FlyoutDirective.prototype.closed;
    /** @type {?} */
    FlyoutDirective.prototype.flyoutZone;
    /** @type {?} */
    FlyoutDirective.prototype.element;
    /** @type {?} */
    FlyoutDirective.prototype.flyoutOpened;
    /** @type {?} */
    FlyoutDirective.prototype.destroyed$;
    /** @type {?} */
    FlyoutDirective.prototype.elementRef;
    /** @type {?} */
    FlyoutDirective.prototype.flyoutService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZseW91dC8iLCJzb3VyY2VzIjpbImxpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPbkQsTUFBTTs7Ozs7SUFvQ0wsWUFBb0IsVUFBc0IsRUFBVSxhQUE0QjtRQUE1RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7MkJBbkNuQyxJQUFJO3FCQW9CekIsRUFBRTtvQkFDUyxVQUFVLENBQUMsSUFBSTsyQkFFcEIsSUFBSTsrQkFDQSxLQUFLO3NCQUNiLElBQUksWUFBWSxFQUFFO3NCQUNsQixJQUFJLFlBQVksRUFBRTs0QkFLckIsS0FBSzswQkFFVyxJQUFJLE9BQU8sRUFBVztRQUc1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRTdDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzthQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7S0FDSjs7OztJQTFDRCxJQUEwQyxnQkFBZ0I7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO0tBQzlCOzs7O0lBQ0QsSUFBdUMsV0FBVztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7S0FDN0I7Ozs7SUFDRCxJQUF1QyxZQUFZO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztLQUM5Qjs7OztJQUNELElBQXVDLFdBQVc7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0tBQzdCOzs7O0lBQ0QsSUFBeUMsVUFBVTtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7S0FDNUI7Ozs7SUFDRCxJQUFrQyxVQUFVO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ3pCOzs7O0lBMkJNLFdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0lBR3JCLElBQUk7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCOzs7OztJQUdLLEtBQUs7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1Qjs7Ozs7O0lBR0ssZ0JBQWdCLENBQUMsT0FBb0I7UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O0lBR25DLFFBQVE7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7OztZQTdFMUIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVzthQUNyQjs7OztZQW5CQSxVQUFVO1lBWUYsYUFBYTs7OzBCQVNwQixXQUFXLFNBQUMsZ0JBQWdCOytCQUM1QixXQUFXLFNBQUMsdUJBQXVCOzBCQUduQyxXQUFXLFNBQUMsb0JBQW9COzJCQUdoQyxXQUFXLFNBQUMsb0JBQW9COzBCQUdoQyxXQUFXLFNBQUMsb0JBQW9CO3lCQUdoQyxXQUFXLFNBQUMsc0JBQXNCO3lCQUdsQyxXQUFXLFNBQUMsZUFBZTtvQkFJM0IsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLE1BQU07cUJBQ04sTUFBTTt5QkFFTixZQUFZLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRDb250ZW50Q2hpbGQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0SG9zdEJpbmRpbmcsXG5cdE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEZseW91dFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2ZseW91dC16b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGbHlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmx5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmx5b3V0U2l6ZSB9IGZyb20gJy4uL3R5cGVzL2ZseW91dC50eXBlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUZseW91dF0nLFxuXHRleHBvcnRBczogJ2F1aUZseW91dCcsXG59KVxuZXhwb3J0IGNsYXNzIEZseW91dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQnKSBmbHlvdXRDbGFzcyA9IHRydWU7XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLXJpZ2h0JykgZ2V0IGZseW91dEFsaWduUmlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxpZ24gPT09ICdyaWdodCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tc20nKSBnZXQgZmx5b3V0U21hbGwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1tZCcpIGdldCBmbHlvdXRNZWRpdW0oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ21lZGl1bSc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tbGcnKSBnZXQgZmx5b3V0TGFyZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1mdWxsJykgZ2V0IGZseW91dEZ1bGwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2Z1bGwnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MuaXMtb3BlbicpIGdldCBmbHlvdXRPcGVuKCkge1xuXHRcdHJldHVybiB0aGlzLmZseW91dE9wZW5lZDtcblx0fVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBjbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogRmx5b3V0U2l6ZSA9IEZseW91dFNpemUuQXV0bztcblx0QElucHV0KCkgcHVibGljIGFsaWduOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b2dnbGVDbGljayA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmF0ZU9uRm9jdXMgPSBmYWxzZTtcblx0QE91dHB1dCgpIHB1YmxpYyBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBDb250ZW50Q2hpbGQoRmx5b3V0Wm9uZURpcmVjdGl2ZSkgcHVibGljIGZseW91dFpvbmU6IEZseW91dFpvbmVEaXJlY3RpdmU7XG5cblx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSBmbHlvdXRPcGVuZWQgPSBmYWxzZTtcblxuXHRwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBmbHlvdXRTZXJ2aWNlOiBGbHlvdXRTZXJ2aWNlKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLmZseW91dFNlcnZpY2Uuc3ViamVjdFxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlbigpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuZmx5b3V0T3BlbmVkKSB7XG5cdFx0XHR0aGlzLmZseW91dE9wZW5lZCA9IHRydWU7XG5cdFx0XHR0aGlzLm9wZW5lZC5lbWl0KHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNsb3NlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmZseW91dE9wZW5lZCkge1xuXHRcdFx0dGhpcy5mbHlvdXRPcGVuZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2xvc2VkLmVtaXQodW5kZWZpbmVkKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaXNJbkNsb3NhYmxlWm9uZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuXHRcdGlmICghdGhpcy5mbHlvdXRab25lKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0Wm9uZS5jb250YWlucyhlbGVtZW50KTtcblx0fVxuXG5cdHB1YmxpYyBpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRPcGVuZWQ7XG5cdH1cbn1cbiJdfQ==