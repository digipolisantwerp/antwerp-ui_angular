/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef, ElementRef, } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { Subject } from 'rxjs/Subject';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';
import { DateHelperService } from '../../services/date-helper.service';
import { VIEWS, DAYS } from '../../types/agenda.types';
var AgendaComponent = /** @class */ (function () {
    function AgendaComponent(elementRef, dateHelperService) {
        this.elementRef = elementRef;
        this.dateHelperService = dateHelperService;
        this.views = VIEWS;
        // Month view
        this.startDayOfWeek = DAYS.MONDAY;
        this.navigate = new EventEmitter();
        this.selectRange = new EventEmitter();
        this.selectDay = new EventEmitter();
        this.selectEvent = new EventEmitter();
        this.clickMore = new EventEmitter();
        this.weekdays = [1, 2, 3, 4, 5, 6, 0];
        this.today = this.getToday();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    AgendaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.watchAgendaSize();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AgendaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.startDayOfWeek) {
            if (this.view === VIEWS.MONTH) {
                this.weekdays = this.dateHelperService.orderWeekDays(changes.startDayOfWeek.currentValue);
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AgendaComponent.prototype.swipe = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.pointerType !== 'touch') {
            return;
        }
        if (e.type === 'swipeleft') {
            this.nextMonth();
            return;
        }
        if (e.type === 'swiperight') {
            this.prevMonth();
            return;
        }
    };
    /**
     * @return {?}
     */
    AgendaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AgendaComponent.prototype.onNavigate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.activeDate = new Date(date);
    };
    /**
     * @param {?} range
     * @return {?}
     */
    AgendaComponent.prototype.onDisplayRange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        this.navigate.emit(range);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AgendaComponent.prototype.onSelectDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectDay.emit(date);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AgendaComponent.prototype.onSelectEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectEvent.emit(event);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AgendaComponent.prototype.onClickMore = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.clickMore.emit(date);
    };
    /**
     * @return {?}
     */
    AgendaComponent.prototype.getToday = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    };
    /**
     * @return {?}
     */
    AgendaComponent.prototype.prevMonth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };
    /**
     * @return {?}
     */
    AgendaComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };
    /**
     * @param {?} range
     * @return {?}
     */
    AgendaComponent.prototype.onSelectRange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        this.selectRange.emit(range);
    };
    /**
     * @return {?}
     */
    AgendaComponent.prototype.watchAgendaSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.agendaSize$ = timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$), map(function () {
            return _this.elementRef.nativeElement.offsetWidth;
        }), distinctUntilChanged())
            .pipe(map(function (width) {
            if (width > 800) {
                return 'o-agenda--big';
            }
            else {
                return 'o-agenda--small';
            }
        }));
    };
    AgendaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda',
                    template: "<div [ngClass]=\"agendaSize$ | async\" class=\"o-agenda\">\n\t<div class=\"o-agenda__inner\">\n\t\t<aui-agenda-navigation\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[view]=\"view\"\n\t\t\t[today]=\"today\"\n\t\t\t(navigate)=\"onNavigate($event)\"\n\t\t></aui-agenda-navigation>\n\n\t\t<aui-agenda-month-view\n\t\t\t*ngIf=\"view === views.MONTH\"\n\t\t\t[activeDate]=\"activeDate\"\n\t\t\t[weekdays]=\"weekdays\"\n\t\t\t[startDayOfWeek]=\"startDayOfWeek\"\n\t\t\t[events]=\"events\"\n\t\t\t[highlights]=\"highlights\"\n\t\t\t[eventItemTemplate]=\"monthEventItemTemplate\"\n\t\t\t(selectDay)=\"onSelectDay($event)\"\n\t\t\t(selectEvent)=\"onSelectEvent($event)\"\n\t\t\t(clickMore)=\"onClickMore($event)\"\n\t\t\t(selectRange)=\"onSelectRange($event)\"\n\t\t\t(displayRange)=\"onDisplayRange($event)\"\n\t\t\t(swipeleft)=\"swipe($event)\"\n\t\t\t(swiperight)=\"swipe($event)\"\n\t\t></aui-agenda-month-view>\n\t</div>\n</div>\n",
                    styles: [":host{display:block;width:100%;height:100%}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    AgendaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DateHelperService }
    ]; };
    AgendaComponent.propDecorators = {
        events: [{ type: Input }],
        view: [{ type: Input }],
        startDayOfWeek: [{ type: Input }],
        activeDate: [{ type: Input }],
        highlights: [{ type: Input }],
        monthEventItemTemplate: [{ type: Input }],
        navigate: [{ type: Output }],
        selectRange: [{ type: Output }],
        selectDay: [{ type: Output }],
        selectEvent: [{ type: Output }],
        clickMore: [{ type: Output }]
    };
    return AgendaComponent;
}());
export { AgendaComponent };
function AgendaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AgendaComponent.prototype.events;
    /** @type {?} */
    AgendaComponent.prototype.view;
    /** @type {?} */
    AgendaComponent.prototype.views;
    /** @type {?} */
    AgendaComponent.prototype.startDayOfWeek;
    /** @type {?} */
    AgendaComponent.prototype.activeDate;
    /** @type {?} */
    AgendaComponent.prototype.highlights;
    /** @type {?} */
    AgendaComponent.prototype.monthEventItemTemplate;
    /** @type {?} */
    AgendaComponent.prototype.navigate;
    /** @type {?} */
    AgendaComponent.prototype.selectRange;
    /** @type {?} */
    AgendaComponent.prototype.selectDay;
    /** @type {?} */
    AgendaComponent.prototype.selectEvent;
    /** @type {?} */
    AgendaComponent.prototype.clickMore;
    /** @type {?} */
    AgendaComponent.prototype.agendaSize$;
    /** @type {?} */
    AgendaComponent.prototype.weekdays;
    /** @type {?} */
    AgendaComponent.prototype.today;
    /** @type {?} */
    AgendaComponent.prototype.componentDestroyed$;
    /** @type {?} */
    AgendaComponent.prototype.elementRef;
    /** @type {?} */
    AgendaComponent.prototype.dateHelperService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsV0FBVyxFQUlYLFVBQVUsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUEwRCxNQUFNLDBCQUEwQixDQUFDOztJQXlEOUcseUJBQ1MsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1Ysc0JBQWlCLEdBQWpCLGlCQUFpQjtxQkFwQlgsS0FBSzs7OEJBR21CLElBQUksQ0FBQyxNQUFNO3dCQUl0QixJQUFJLFlBQVksRUFBc0I7MkJBQ25DLElBQUksWUFBWSxFQUFzQjt5QkFDeEMsSUFBSSxZQUFZLEVBQVE7MkJBQ3RCLElBQUksWUFBWSxFQUFrQjt5QkFDcEMsSUFBSSxZQUFZLEVBQUU7d0JBR3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFO21DQUNZLElBQUksT0FBTyxFQUFXO0tBS2xFOzs7O0lBRUcsa0NBQVE7Ozs7UUFDZCxJQUFJLENBQUMsZUFBZSxFQUFF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QUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO2FBQzlCLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQ25DLEdBQUcsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDakQsQ0FBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3RCO2FBQ0EsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDVCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLGVBQWUsQ0FBQzthQUN2QjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzthQUN6QjtTQUNELENBQUMsQ0FDRixDQUFDOzs7Z0JBdEpKLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDg1QkEyQlY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsNkNBQTZDLENBQUM7b0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUMvQzs7OztnQkF6Q0EsVUFBVTtnQkFNRixpQkFBaUI7Ozt5QkFzQ3hCLEtBQUs7dUJBQ0wsS0FBSztpQ0FJTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5Q0FDTCxLQUFLOzJCQUNMLE1BQU07OEJBQ04sTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTs7MEJBbkVSOztTQW9EYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRUZW1wbGF0ZVJlZixcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdE9uRGVzdHJveSxcblx0RWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IHRha2VVbnRpbCwgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IFZJRVdTLCBEQVlTLCBEYXRlUmFuZ2VJbnRlcmZhY2UsIEV2ZW50SW50ZXJmYWNlLCBIaWdoTGlnaHRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYWdlbmRhJyxcblx0dGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cImFnZW5kYVNpemUkIHwgYXN5bmNcIiBjbGFzcz1cIm8tYWdlbmRhXCI+XG5cdDxkaXYgY2xhc3M9XCJvLWFnZW5kYV9faW5uZXJcIj5cblx0XHQ8YXVpLWFnZW5kYS1uYXZpZ2F0aW9uXG5cdFx0XHRbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcblx0XHRcdFt2aWV3XT1cInZpZXdcIlxuXHRcdFx0W3RvZGF5XT1cInRvZGF5XCJcblx0XHRcdChuYXZpZ2F0ZSk9XCJvbk5hdmlnYXRlKCRldmVudClcIlxuXHRcdD48L2F1aS1hZ2VuZGEtbmF2aWdhdGlvbj5cblxuXHRcdDxhdWktYWdlbmRhLW1vbnRoLXZpZXdcblx0XHRcdCpuZ0lmPVwidmlldyA9PT0gdmlld3MuTU9OVEhcIlxuXHRcdFx0W2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG5cdFx0XHRbd2Vla2RheXNdPVwid2Vla2RheXNcIlxuXHRcdFx0W3N0YXJ0RGF5T2ZXZWVrXT1cInN0YXJ0RGF5T2ZXZWVrXCJcblx0XHRcdFtldmVudHNdPVwiZXZlbnRzXCJcblx0XHRcdFtoaWdobGlnaHRzXT1cImhpZ2hsaWdodHNcIlxuXHRcdFx0W2V2ZW50SXRlbVRlbXBsYXRlXT1cIm1vbnRoRXZlbnRJdGVtVGVtcGxhdGVcIlxuXHRcdFx0KHNlbGVjdERheSk9XCJvblNlbGVjdERheSgkZXZlbnQpXCJcblx0XHRcdChzZWxlY3RFdmVudCk9XCJvblNlbGVjdEV2ZW50KCRldmVudClcIlxuXHRcdFx0KGNsaWNrTW9yZSk9XCJvbkNsaWNrTW9yZSgkZXZlbnQpXCJcblx0XHRcdChzZWxlY3RSYW5nZSk9XCJvblNlbGVjdFJhbmdlKCRldmVudClcIlxuXHRcdFx0KGRpc3BsYXlSYW5nZSk9XCJvbkRpc3BsYXlSYW5nZSgkZXZlbnQpXCJcblx0XHRcdChzd2lwZWxlZnQpPVwic3dpcGUoJGV2ZW50KVwiXG5cdFx0XHQoc3dpcGVyaWdodCk9XCJzd2lwZSgkZXZlbnQpXCJcblx0XHQ+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXc+XG5cdDwvZGl2PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWdlbmRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cdC8vIERlZmF1bHRcblx0QElucHV0KCkgcHVibGljIGV2ZW50czogRXZlbnRJbnRlcmZhY2VbXTtcblx0QElucHV0KCkgcHVibGljIHZpZXc6IFZJRVdTO1xuXHRwdWJsaWMgdmlld3MgPSBWSUVXUztcblxuXHQvLyBNb250aCB2aWV3XG5cdEBJbnB1dCgpIHB1YmxpYyBzdGFydERheU9mV2VlazogREFZUyA9IERBWVMuTU9OREFZOyAvLyBTdGFydCBvZiB0aGUgd2VlayAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSwgLi4uKVxuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlRGF0ZTogRGF0ZTtcblx0QElucHV0KCkgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hMaWdodEludGVyZmFjZTtcblx0QElucHV0KCkgcHVibGljIG1vbnRoRXZlbnRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cdEBPdXRwdXQoKSBwdWJsaWMgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RSYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVJhbmdlSW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdERheSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tNb3JlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBhZ2VuZGFTaXplJDtcblx0cHVibGljIHdlZWtkYXlzOiBEQVlTW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgMF07XG5cdHB1YmxpYyB0b2RheTogRGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBkYXRlSGVscGVyU2VydmljZTogRGF0ZUhlbHBlclNlcnZpY2Vcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLndhdGNoQWdlbmRhU2l6ZSgpO1xuXHR9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnN0YXJ0RGF5T2ZXZWVrKSB7XG5cdFx0XHRpZiAodGhpcy52aWV3ID09PSBWSUVXUy5NT05USCkge1xuXHRcdFx0XHR0aGlzLndlZWtkYXlzID0gdGhpcy5kYXRlSGVscGVyU2VydmljZS5vcmRlcldlZWtEYXlzKGNoYW5nZXMuc3RhcnREYXlPZldlZWsuY3VycmVudFZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3dpcGUoZSkge1xuXHRcdGlmIChlLnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGUudHlwZSA9PT0gJ3N3aXBlbGVmdCcpIHtcblx0XHRcdHRoaXMubmV4dE1vbnRoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGUudHlwZSA9PT0gJ3N3aXBlcmlnaHQnKSB7XG5cdFx0XHR0aGlzLnByZXZNb250aCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdHB1YmxpYyBvbk5hdmlnYXRlKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblx0fVxuXG5cdHB1YmxpYyBvbkRpc3BsYXlSYW5nZShyYW5nZTogRGF0ZVJhbmdlSW50ZXJmYWNlKTogdm9pZCB7XG5cdFx0dGhpcy5uYXZpZ2F0ZS5lbWl0KHJhbmdlKTtcblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdERheShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3REYXkuZW1pdChkYXRlKTtcblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRwdWJsaWMgb25DbGlja01vcmUoZGF0ZTogRGF0ZSkge1xuXHRcdHRoaXMuY2xpY2tNb3JlLmVtaXQoZGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFRvZGF5KCk6IERhdGUge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cdFx0cmV0dXJuIGRhdGU7XG5cdH1cblxuXHRwdWJsaWMgcHJldk1vbnRoKCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMub25OYXZpZ2F0ZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSAtIDEsIDEpKTtcblx0fVxuXG5cdHB1YmxpYyBuZXh0TW9udGgoKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0dGhpcy5vbk5hdmlnYXRlKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMSkpO1xuXHR9XG5cblx0cHVibGljIG9uU2VsZWN0UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSkge1xuXHRcdHRoaXMuc2VsZWN0UmFuZ2UuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwcml2YXRlIHdhdGNoQWdlbmRhU2l6ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFnZW5kYVNpemUkID0gdGltZXIoMCwgMjUwKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpLFxuXHRcdFx0XHRtYXAoKCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRtYXAoKHdpZHRoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHdpZHRoID4gODAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ28tYWdlbmRhLS1iaWcnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ28tYWdlbmRhLS1zbWFsbCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxufVxuIl19