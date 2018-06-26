/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { STATUSBAR_AVAILABLE_TYPES, } from '../../status-bar.conf';
var StatusbarComponent = /** @class */ (function () {
    function StatusbarComponent(availableTypes, router) {
        var _this = this;
        this.availableTypes = availableTypes;
        this.router = router;
        this.notifications = [];
        this.remainingMessage = {
            singular: '%{remaining} more',
            plural: '%{remaining} more',
        };
        this.clearNotification = new EventEmitter();
        this.activeNotification = null;
        this.typeClasses = {};
        this.iconMap = {};
        this.replaceMap = {
            remaining: 0,
        };
        Object.getOwnPropertyNames(availableTypes)
            .forEach(function (type) {
            _this.typeClasses[type] = availableTypes[type].classList;
            _this.iconMap[type] = availableTypes[type].icon;
        });
    }
    /**
     * @return {?}
     */
    StatusbarComponent.prototype.clearListeners = /**
     * @return {?}
     */
    function () {
        if (this.notificationTimer) {
            clearTimeout(this.notificationTimer);
        }
        if (this.scopeListener) {
            this.scopeListener.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    StatusbarComponent.prototype.setListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeNotification.timer) {
            this.notificationTimer = setTimeout(this.onClearNotification.bind(this), this.activeNotification.timer);
        }
        if (this.activeNotification.scope === 'page') {
            this.scopeListener = this.router.events
                .pipe(filter(function (updatedRoute) {
                return updatedRoute instanceof NavigationStart;
            }))
                .subscribe((function (updatedRoute) {
                if (updatedRoute.url !== _this.router.url) {
                    _this.onClearNotification();
                }
            }).bind(this));
        }
    };
    /**
     * @return {?}
     */
    StatusbarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.clearListeners();
        if (Array.isArray(this.notifications) && !!this.notifications.length) {
            this.activeNotification = this.notifications.slice(-1)[0];
            this.replaceMap = {
                remaining: this.notifications.length - 1,
            };
        }
        else {
            this.activeNotification = null;
            this.replaceMap = {
                remaining: 0,
            };
        }
        if (this.activeNotification) {
            this.setListeners();
        }
    };
    /**
     * @return {?}
     */
    StatusbarComponent.prototype.onClearNotification = /**
     * @return {?}
     */
    function () {
        this.clearNotification.emit(this.activeNotification);
    };
    StatusbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-statusbar',
                    template: "<div class=\"o-statusbar\" *ngIf=\"activeNotification\" [ngClass]=\"typeClasses[activeNotification.type]\">\n    <span class=\"o-statusbar__status\" [ngClass]=\"iconMap[activeNotification.type]\"></span>\n\n    <div class=\"o-statusbar__notification\">\n        <p>\n            <span [innerHTML]=\"activeNotification.message\"></span>\n            <span *ngIf=\"notifications.length > 1\">(<span [innerHTML]=\"remainingMessage | pluralizeLabel:replaceMap.remaining | interpolateLabel:replaceMap\"></span>)</span>\n        </p>\n    </div>\n\n    <button class=\"a-button has-icon\" (click)=\"onClearNotification()\">\n        <span class=\"fa fa-times\"></span>\n    </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    StatusbarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [STATUSBAR_AVAILABLE_TYPES,] }] },
        { type: Router }
    ]; };
    StatusbarComponent.propDecorators = {
        notifications: [{ type: Input }],
        remainingMessage: [{ type: Input }],
        clearNotification: [{ type: Output }]
    };
    return StatusbarComponent;
}());
export { StatusbarComponent };
function StatusbarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    StatusbarComponent.prototype.notifications;
    /** @type {?} */
    StatusbarComponent.prototype.remainingMessage;
    /** @type {?} */
    StatusbarComponent.prototype.clearNotification;
    /** @type {?} */
    StatusbarComponent.prototype.activeNotification;
    /** @type {?} */
    StatusbarComponent.prototype.typeClasses;
    /** @type {?} */
    StatusbarComponent.prototype.iconMap;
    /** @type {?} */
    StatusbarComponent.prototype.replaceMap;
    /** @type {?} */
    StatusbarComponent.prototype.notificationTimer;
    /** @type {?} */
    StatusbarComponent.prototype.scopeListener;
    /** @type {?} */
    StatusbarComponent.prototype.availableTypes;
    /** @type {?} */
    StatusbarComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUNOLHlCQUF5QixHQUN6QixNQUFNLHVCQUF1QixDQUFDOztJQXVDOUIsNEJBQzRDLGNBQWMsRUFDakQ7UUFGVCxpQkFTQztRQVIyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtRQUNqRCxXQUFNLEdBQU4sTUFBTTs2QkFuQjBCLEVBQUU7Z0NBQ1I7WUFDbEMsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixNQUFNLEVBQUUsbUJBQW1CO1NBQzNCO2lDQUM2QixJQUFJLFlBQVksRUFBRTtrQ0FFTixJQUFJOzJCQUNwQixFQUFFO3VCQUNOLEVBQUU7MEJBQ0o7WUFDbkIsU0FBUyxFQUFFLENBQUM7U0FDWjtRQVNBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7YUFDeEMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNaLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN4RCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7S0FDRDs7OztJQUVELHlDQUFZOzs7SUFBWjtRQUFBLGlCQWtCQztRQWpCQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2lCQUNyQyxJQUFJLENBQ0osTUFBTSxDQUFDLFVBQUEsWUFBWTtnQkFDbEIsTUFBTSxDQUFDLFlBQVksWUFBWSxlQUFlLENBQUM7YUFDL0MsQ0FBQyxDQUNGO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLFVBQUEsWUFBWTtnQkFDdkIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUMzQjthQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNEOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7YUFDeEMsQ0FBQztTQUNGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDO2FBQ1osQ0FBQztTQUNGO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEI7S0FDRDs7OztJQUVELGdEQUFtQjs7O0lBQW5CO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNyRDs7Z0JBcEdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGlyQkFjVjtvQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0RBb0JFLE1BQU0sU0FBQyx5QkFBeUI7Z0JBaEQxQixNQUFNOzs7Z0NBOEJiLEtBQUs7bUNBQ0wsS0FBSztvQ0FJTCxNQUFNOzs2QkE1Q1I7O1NBc0NhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEluamVjdCxcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9uQ2hhbmdlcyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJ0BhY3BhYXMtdWkvanMtbm90aWZpY2F0aW9uLXN0b3JlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5cbmltcG9ydCB7XG5cdFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMsXG59IGZyb20gJy4uLy4uL3N0YXR1cy1iYXIuY29uZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zdGF0dXNiYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvLXN0YXR1c2JhclwiICpuZ0lmPVwiYWN0aXZlTm90aWZpY2F0aW9uXCIgW25nQ2xhc3NdPVwidHlwZUNsYXNzZXNbYWN0aXZlTm90aWZpY2F0aW9uLnR5cGVdXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJvLXN0YXR1c2Jhcl9fc3RhdHVzXCIgW25nQ2xhc3NdPVwiaWNvbk1hcFthY3RpdmVOb3RpZmljYXRpb24udHlwZV1cIj48L3NwYW4+XG5cbiAgICA8ZGl2IGNsYXNzPVwiby1zdGF0dXNiYXJfX25vdGlmaWNhdGlvblwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiYWN0aXZlTm90aWZpY2F0aW9uLm1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMVwiPig8c3BhbiBbaW5uZXJIVE1MXT1cInJlbWFpbmluZ01lc3NhZ2UgfCBwbHVyYWxpemVMYWJlbDpyZXBsYWNlTWFwLnJlbWFpbmluZyB8IGludGVycG9sYXRlTGFiZWw6cmVwbGFjZU1hcFwiPjwvc3Bhbj4pPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwib25DbGVhck5vdGlmaWNhdGlvbigpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSA9IFtdO1xuXHRASW5wdXQoKSByZW1haW5pbmdNZXNzYWdlOiBMYWJlbCA9IHtcblx0XHRzaW5ndWxhcjogJyV7cmVtYWluaW5nfSBtb3JlJyxcblx0XHRwbHVyYWw6ICcle3JlbWFpbmluZ30gbW9yZScsXG5cdH07XG5cdEBPdXRwdXQoKSBjbGVhck5vdGlmaWNhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgYWN0aXZlTm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24gPSBudWxsO1xuXHRwdWJsaWMgdHlwZUNsYXNzZXM6IGFueSA9IHt9O1xuXHRwdWJsaWMgaWNvbk1hcDogYW55ID0ge307XG5cdHB1YmxpYyByZXBsYWNlTWFwID0ge1xuXHRcdHJlbWFpbmluZzogMCxcblx0fTtcblxuXHRwcml2YXRlIG5vdGlmaWNhdGlvblRpbWVyO1xuXHRwcml2YXRlIHNjb3BlTGlzdGVuZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChTVEFUVVNCQVJfQVZBSUxBQkxFX1RZUEVTKSBwcml2YXRlIGF2YWlsYWJsZVR5cGVzLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcblx0KSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXZhaWxhYmxlVHlwZXMpXG5cdFx0XHQuZm9yRWFjaCh0eXBlID0+IHtcblx0XHRcdFx0dGhpcy50eXBlQ2xhc3Nlc1t0eXBlXSA9IGF2YWlsYWJsZVR5cGVzW3R5cGVdLmNsYXNzTGlzdDtcblx0XHRcdFx0dGhpcy5pY29uTWFwW3R5cGVdID0gYXZhaWxhYmxlVHlwZXNbdHlwZV0uaWNvbjtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xlYXJMaXN0ZW5lcnMoKSB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uVGltZXIpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm5vdGlmaWNhdGlvblRpbWVyKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY29wZUxpc3RlbmVyKSB7XG5cdFx0XHR0aGlzLnNjb3BlTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHRzZXRMaXN0ZW5lcnMoKSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uLnRpbWVyKSB7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uQ2xlYXJOb3RpZmljYXRpb24uYmluZCh0aGlzKSwgdGhpcy5hY3RpdmVOb3RpZmljYXRpb24udGltZXIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbi5zY29wZSA9PT0gJ3BhZ2UnKSB7XG5cdFx0XHR0aGlzLnNjb3BlTGlzdGVuZXIgPSB0aGlzLnJvdXRlci5ldmVudHNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKHVwZGF0ZWRSb3V0ZSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZFJvdXRlIGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgodXBkYXRlZFJvdXRlID0+IHtcblx0XHRcdFx0XHRpZiAodXBkYXRlZFJvdXRlLnVybCAhPT0gdGhpcy5yb3V0ZXIudXJsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2xlYXJOb3RpZmljYXRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMubm90aWZpY2F0aW9ucykgJiYgISF0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbiA9IHRoaXMubm90aWZpY2F0aW9ucy5zbGljZSgtMSlbMF07XG5cdFx0XHR0aGlzLnJlcGxhY2VNYXAgPSB7XG5cdFx0XHRcdHJlbWFpbmluZzogdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCAtIDEsXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbiA9IG51bGw7XG5cdFx0XHR0aGlzLnJlcGxhY2VNYXAgPSB7XG5cdFx0XHRcdHJlbWFpbmluZzogMCxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uKSB7XG5cdFx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2xlYXJOb3RpZmljYXRpb24oKSB7XG5cdFx0dGhpcy5jbGVhck5vdGlmaWNhdGlvbi5lbWl0KHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uKTtcblx0fVxufVxuIl19