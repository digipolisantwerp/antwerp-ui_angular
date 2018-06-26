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
var FlyoutDirective = /** @class */ (function () {
    function FlyoutDirective(elementRef, flyoutService) {
        var _this = this;
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
            .subscribe(function (res) {
            _this.close();
        });
    }
    Object.defineProperty(FlyoutDirective.prototype, "flyoutAlignRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.align === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutMedium", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutFull", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size === 'full';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyoutDirective.prototype, "flyoutOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.flyoutOpened;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next(true);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.flyoutOpened) {
            this.flyoutOpened = true;
            this.opened.emit(undefined);
        }
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.flyoutOpened) {
            this.flyoutOpened = false;
            this.closed.emit(undefined);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    FlyoutDirective.prototype.isInClosableZone = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this.flyoutZone) {
            return false;
        }
        return this.flyoutZone.contains(element);
    };
    /**
     * @return {?}
     */
    FlyoutDirective.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.flyoutOpened;
    };
    FlyoutDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFlyout]',
                    exportAs: 'auiFlyout',
                },] },
    ];
    /** @nocollapse */
    FlyoutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FlyoutService }
    ]; };
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
    return FlyoutDirective;
}());
export { FlyoutDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZseW91dC8iLCJzb3VyY2VzIjpbImxpYi9mbHlvdXQvZGlyZWN0aXZlcy9mbHlvdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBMkNsRCx5QkFBb0IsVUFBc0IsRUFBVSxhQUE0QjtRQUFoRixpQkFRQztRQVJtQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7MkJBbkNuQyxJQUFJO3FCQW9CekIsRUFBRTtvQkFDUyxVQUFVLENBQUMsSUFBSTsyQkFFcEIsSUFBSTsrQkFDQSxLQUFLO3NCQUNiLElBQUksWUFBWSxFQUFFO3NCQUNsQixJQUFJLFlBQVksRUFBRTs0QkFLckIsS0FBSzswQkFFVyxJQUFJLE9BQU8sRUFBVztRQUc1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRTdDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzthQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ2QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0tBQ0o7SUExQ0Qsc0JBQTBDLDZDQUFnQjs7OztRQUExRDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQztTQUM5Qjs7O09BQUE7SUFDRCxzQkFBdUMsd0NBQVc7Ozs7UUFBbEQ7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7U0FDN0I7OztPQUFBO0lBQ0Qsc0JBQXVDLHlDQUFZOzs7O1FBQW5EO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO1NBQzlCOzs7T0FBQTtJQUNELHNCQUF1Qyx3Q0FBVzs7OztRQUFsRDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztTQUM3Qjs7O09BQUE7SUFDRCxzQkFBeUMsdUNBQVU7Ozs7UUFBbkQ7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7U0FDNUI7OztPQUFBO0lBQ0Qsc0JBQWtDLHVDQUFVOzs7O1FBQTVDO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDekI7OztPQUFBOzs7O0lBMkJNLHFDQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztJQUdyQiw4QkFBSTs7OztRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7Ozs7O0lBR0ssK0JBQUs7Ozs7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1Qjs7Ozs7O0lBR0ssMENBQWdCOzs7O2NBQUMsT0FBb0I7UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O0lBR25DLGtDQUFROzs7O1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7OztnQkE3RTFCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFdBQVc7aUJBQ3JCOzs7O2dCQW5CQSxVQUFVO2dCQVlGLGFBQWE7Ozs4QkFTcEIsV0FBVyxTQUFDLGdCQUFnQjttQ0FDNUIsV0FBVyxTQUFDLHVCQUF1Qjs4QkFHbkMsV0FBVyxTQUFDLG9CQUFvQjsrQkFHaEMsV0FBVyxTQUFDLG9CQUFvQjs4QkFHaEMsV0FBVyxTQUFDLG9CQUFvQjs2QkFHaEMsV0FBVyxTQUFDLHNCQUFzQjs2QkFHbEMsV0FBVyxTQUFDLGVBQWU7d0JBSTNCLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxNQUFNO3lCQUNOLE1BQU07NkJBRU4sWUFBWSxTQUFDLG1CQUFtQjs7MEJBbkRsQzs7U0FzQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0Q29udGVudENoaWxkLFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdEhvc3RCaW5kaW5nLFxuXHRPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGbHlvdXRab25lRGlyZWN0aXZlIH0gZnJvbSAnLi9mbHlvdXQtem9uZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmx5b3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZseW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IEZseW91dFNpemUgfSBmcm9tICcuLi90eXBlcy9mbHlvdXQudHlwZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGbHlvdXRdJyxcblx0ZXhwb3J0QXM6ICdhdWlGbHlvdXQnLFxufSlcbmV4cG9ydCBjbGFzcyBGbHlvdXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0JykgZmx5b3V0Q2xhc3MgPSB0cnVlO1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm0tZmx5b3V0LS1yaWdodCcpIGdldCBmbHlvdXRBbGlnblJpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmFsaWduID09PSAncmlnaHQnO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLXNtJykgZ2V0IGZseW91dFNtYWxsKCkge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tbWQnKSBnZXQgZmx5b3V0TWVkaXVtKCkge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuXHR9XG5cdEBIb3N0QmluZGluZygnY2xhc3MubS1mbHlvdXQtLWxnJykgZ2V0IGZseW91dExhcmdlKCkge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG5cdH1cblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLWZseW91dC0tZnVsbCcpIGdldCBmbHlvdXRGdWxsKCkge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09ICdmdWxsJztcblx0fVxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW9wZW4nKSBnZXQgZmx5b3V0T3BlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5mbHlvdXRPcGVuZWQ7XG5cdH1cblxuXHRASW5wdXQoKSBwdWJsaWMgY2xhc3MgPSAnJztcblx0QElucHV0KCkgcHVibGljIHNpemU6IEZseW91dFNpemUgPSBGbHlvdXRTaXplLkF1dG87XG5cdEBJbnB1dCgpIHB1YmxpYyBhbGlnbjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdG9nZ2xlQ2xpY2sgPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZhdGVPbkZvY3VzID0gZmFsc2U7XG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAQ29udGVudENoaWxkKEZseW91dFpvbmVEaXJlY3RpdmUpIHB1YmxpYyBmbHlvdXRab25lOiBGbHlvdXRab25lRGlyZWN0aXZlO1xuXG5cdHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgZmx5b3V0T3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgZmx5b3V0U2VydmljZTogRmx5b3V0U2VydmljZSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5mbHlvdXRTZXJ2aWNlLnN1YmplY3Rcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuXHRcdFx0LnN1YnNjcmliZSgocmVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHR9XG5cblx0cHVibGljIG9wZW4oKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmZseW91dE9wZW5lZCkge1xuXHRcdFx0dGhpcy5mbHlvdXRPcGVuZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5vcGVuZWQuZW1pdCh1bmRlZmluZWQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5mbHlvdXRPcGVuZWQpIHtcblx0XHRcdHRoaXMuZmx5b3V0T3BlbmVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLmNsb3NlZC5lbWl0KHVuZGVmaW5lZCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGlzSW5DbG9zYWJsZVpvbmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMuZmx5b3V0Wm9uZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZseW91dFpvbmUuY29udGFpbnMoZWxlbWVudCk7XG5cdH1cblxuXHRwdWJsaWMgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmx5b3V0T3BlbmVkO1xuXHR9XG59XG4iXX0=