/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { STATUSBAR_AVAILABLE_TYPES, } from '../../status-bar.conf';
export class StatusbarComponent {
    /**
     * @param {?} availableTypes
     * @param {?} router
     */
    constructor(availableTypes, router) {
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
            .forEach(type => {
            this.typeClasses[type] = availableTypes[type].classList;
            this.iconMap[type] = availableTypes[type].icon;
        });
    }
    /**
     * @return {?}
     */
    clearListeners() {
        if (this.notificationTimer) {
            clearTimeout(this.notificationTimer);
        }
        if (this.scopeListener) {
            this.scopeListener.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    setListeners() {
        if (this.activeNotification.timer) {
            this.notificationTimer = setTimeout(this.onClearNotification.bind(this), this.activeNotification.timer);
        }
        if (this.activeNotification.scope === 'page') {
            this.scopeListener = this.router.events
                .pipe(filter(updatedRoute => {
                return updatedRoute instanceof NavigationStart;
            }))
                .subscribe((updatedRoute => {
                if (updatedRoute.url !== this.router.url) {
                    this.onClearNotification();
                }
            }).bind(this));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @return {?}
     */
    onClearNotification() {
        this.clearNotification.emit(this.activeNotification);
    }
}
StatusbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-statusbar',
                template: `<div class="o-statusbar" *ngIf="activeNotification" [ngClass]="typeClasses[activeNotification.type]">
    <span class="o-statusbar__status" [ngClass]="iconMap[activeNotification.type]"></span>

    <div class="o-statusbar__notification">
        <p>
            <span [innerHTML]="activeNotification.message"></span>
            <span *ngIf="notifications.length > 1">(<span [innerHTML]="remainingMessage | pluralizeLabel:replaceMap.remaining | interpolateLabel:replaceMap"></span>)</span>
        </p>
    </div>

    <button class="a-button has-icon" (click)="onClearNotification()">
        <span class="fa fa-times"></span>
    </button>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
StatusbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [STATUSBAR_AVAILABLE_TYPES,] }] },
    { type: Router }
];
StatusbarComponent.propDecorators = {
    notifications: [{ type: Input }],
    remainingMessage: [{ type: Input }],
    clearNotification: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvY29tcG9uZW50cy9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUNOLHlCQUF5QixHQUN6QixNQUFNLHVCQUF1QixDQUFDO0FBcUIvQixNQUFNOzs7OztJQWtCTCxZQUM0QyxjQUFjLEVBQ2pEO1FBRG1DLG1CQUFjLEdBQWQsY0FBYyxDQUFBO1FBQ2pELFdBQU0sR0FBTixNQUFNOzZCQW5CMEIsRUFBRTtnQ0FDUjtZQUNsQyxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSxtQkFBbUI7U0FDM0I7aUNBQzZCLElBQUksWUFBWSxFQUFFO2tDQUVOLElBQUk7MkJBQ3BCLEVBQUU7dUJBQ04sRUFBRTswQkFDSjtZQUNuQixTQUFTLEVBQUUsQ0FBQztTQUNaO1FBU0EsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQzthQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQy9DLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsY0FBYztRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztLQUNEOzs7O0lBRUQsWUFBWTtRQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEc7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07aUJBQ3JDLElBQUksQ0FDSixNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sQ0FBQyxZQUFZLFlBQVksZUFBZSxDQUFDO2FBQy9DLENBQUMsQ0FDRjtpQkFDQSxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDMUIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUMzQjthQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNEOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO2FBQ3hDLENBQUM7U0FDRjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNqQixTQUFTLEVBQUUsQ0FBQzthQUNaLENBQUM7U0FDRjtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCO0tBQ0Q7Ozs7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNyRDs7O1lBcEdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztDQWNWO2dCQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7OzRDQW9CRSxNQUFNLFNBQUMseUJBQXlCO1lBaEQxQixNQUFNOzs7NEJBOEJiLEtBQUs7K0JBQ0wsS0FBSztnQ0FJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0SW5qZWN0LFxuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0T25DaGFuZ2VzLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnQGFjcGFhcy11aS9qcy1ub3RpZmljYXRpb24tc3RvcmUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHtcblx0U1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUyxcbn0gZnJvbSAnLi4vLi4vc3RhdHVzLWJhci5jb25mJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXN0YXR1c2JhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm8tc3RhdHVzYmFyXCIgKm5nSWY9XCJhY3RpdmVOb3RpZmljYXRpb25cIiBbbmdDbGFzc109XCJ0eXBlQ2xhc3Nlc1thY3RpdmVOb3RpZmljYXRpb24udHlwZV1cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm8tc3RhdHVzYmFyX19zdGF0dXNcIiBbbmdDbGFzc109XCJpY29uTWFwW2FjdGl2ZU5vdGlmaWNhdGlvbi50eXBlXVwiPjwvc3Bhbj5cblxuICAgIDxkaXYgY2xhc3M9XCJvLXN0YXR1c2Jhcl9fbm90aWZpY2F0aW9uXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJhY3RpdmVOb3RpZmljYXRpb24ubWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibm90aWZpY2F0aW9ucy5sZW5ndGggPiAxXCI+KDxzcGFuIFtpbm5lckhUTUxdPVwicmVtYWluaW5nTWVzc2FnZSB8IHBsdXJhbGl6ZUxhYmVsOnJlcGxhY2VNYXAucmVtYWluaW5nIHwgaW50ZXJwb2xhdGVMYWJlbDpyZXBsYWNlTWFwXCI+PC9zcGFuPik8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gY2xhc3M9XCJhLWJ1dHRvbiBoYXMtaWNvblwiIChjbGljayk9XCJvbkNsZWFyTm90aWZpY2F0aW9uKClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdID0gW107XG5cdEBJbnB1dCgpIHJlbWFpbmluZ01lc3NhZ2U6IExhYmVsID0ge1xuXHRcdHNpbmd1bGFyOiAnJXtyZW1haW5pbmd9IG1vcmUnLFxuXHRcdHBsdXJhbDogJyV7cmVtYWluaW5nfSBtb3JlJyxcblx0fTtcblx0QE91dHB1dCgpIGNsZWFyTm90aWZpY2F0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBhY3RpdmVOb3RpZmljYXRpb246IE5vdGlmaWNhdGlvbiA9IG51bGw7XG5cdHB1YmxpYyB0eXBlQ2xhc3NlczogYW55ID0ge307XG5cdHB1YmxpYyBpY29uTWFwOiBhbnkgPSB7fTtcblx0cHVibGljIHJlcGxhY2VNYXAgPSB7XG5cdFx0cmVtYWluaW5nOiAwLFxuXHR9O1xuXG5cdHByaXZhdGUgbm90aWZpY2F0aW9uVGltZXI7XG5cdHByaXZhdGUgc2NvcGVMaXN0ZW5lcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFNUQVRVU0JBUl9BVkFJTEFCTEVfVFlQRVMpIHByaXZhdGUgYXZhaWxhYmxlVHlwZXMsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuXHQpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhdmFpbGFibGVUeXBlcylcblx0XHRcdC5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0XHR0aGlzLnR5cGVDbGFzc2VzW3R5cGVdID0gYXZhaWxhYmxlVHlwZXNbdHlwZV0uY2xhc3NMaXN0O1xuXHRcdFx0XHR0aGlzLmljb25NYXBbdHlwZV0gPSBhdmFpbGFibGVUeXBlc1t0eXBlXS5pY29uO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbGVhckxpc3RlbmVycygpIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25UaW1lcikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubm90aWZpY2F0aW9uVGltZXIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjb3BlTGlzdGVuZXIpIHtcblx0XHRcdHRoaXMuc2NvcGVMaXN0ZW5lci51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdHNldExpc3RlbmVycygpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVOb3RpZmljYXRpb24udGltZXIpIHtcblx0XHRcdHRoaXMubm90aWZpY2F0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DbGVhck5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpLCB0aGlzLmFjdGl2ZU5vdGlmaWNhdGlvbi50aW1lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uLnNjb3BlID09PSAncGFnZScpIHtcblx0XHRcdHRoaXMuc2NvcGVMaXN0ZW5lciA9IHRoaXMucm91dGVyLmV2ZW50c1xuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRmaWx0ZXIodXBkYXRlZFJvdXRlID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkUm91dGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh1cGRhdGVkUm91dGUgPT4ge1xuXHRcdFx0XHRcdGlmICh1cGRhdGVkUm91dGUudXJsICE9PSB0aGlzLnJvdXRlci51cmwpIHtcblx0XHRcdFx0XHRcdHRoaXMub25DbGVhck5vdGlmaWNhdGlvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuYmluZCh0aGlzKSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5jbGVhckxpc3RlbmVycygpO1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5ub3RpZmljYXRpb25zKSAmJiAhIXRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uID0gdGhpcy5ub3RpZmljYXRpb25zLnNsaWNlKC0xKVswXTtcblx0XHRcdHRoaXMucmVwbGFjZU1hcCA9IHtcblx0XHRcdFx0cmVtYWluaW5nOiB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoIC0gMSxcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWN0aXZlTm90aWZpY2F0aW9uID0gbnVsbDtcblx0XHRcdHRoaXMucmVwbGFjZU1hcCA9IHtcblx0XHRcdFx0cmVtYWluaW5nOiAwLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmVOb3RpZmljYXRpb24pIHtcblx0XHRcdHRoaXMuc2V0TGlzdGVuZXJzKCk7XG5cdFx0fVxuXHR9XG5cblx0b25DbGVhck5vdGlmaWNhdGlvbigpIHtcblx0XHR0aGlzLmNsZWFyTm90aWZpY2F0aW9uLmVtaXQodGhpcy5hY3RpdmVOb3RpZmljYXRpb24pO1xuXHR9XG59XG4iXX0=