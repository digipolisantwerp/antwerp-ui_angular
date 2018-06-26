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
export class AgendaComponent {
    /**
     * @param {?} elementRef
     * @param {?} dateHelperService
     */
    constructor(elementRef, dateHelperService) {
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
    ngOnInit() {
        this.watchAgendaSize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.startDayOfWeek) {
            if (this.view === VIEWS.MONTH) {
                this.weekdays = this.dateHelperService.orderWeekDays(changes.startDayOfWeek.currentValue);
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    swipe(e) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onNavigate(date) {
        this.activeDate = new Date(date);
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onDisplayRange(range) {
        this.navigate.emit(range);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDay(date) {
        this.selectDay.emit(date);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectEvent(event) {
        this.selectEvent.emit(event);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onClickMore(date) {
        this.clickMore.emit(date);
    }
    /**
     * @return {?}
     */
    getToday() {
        const /** @type {?} */ date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }
    /**
     * @return {?}
     */
    prevMonth() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
    /**
     * @return {?}
     */
    nextMonth() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.onNavigate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onSelectRange(range) {
        this.selectRange.emit(range);
    }
    /**
     * @return {?}
     */
    watchAgendaSize() {
        this.agendaSize$ = timer(0, 250)
            .pipe(takeUntil(this.componentDestroyed$), map(() => {
            return this.elementRef.nativeElement.offsetWidth;
        }), distinctUntilChanged())
            .pipe(map((width) => {
            if (width > 800) {
                return 'o-agenda--big';
            }
            else {
                return 'o-agenda--small';
            }
        }));
    }
}
AgendaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda',
                template: `<div [ngClass]="agendaSize$ | async" class="o-agenda">
	<div class="o-agenda__inner">
		<aui-agenda-navigation
			[activeDate]="activeDate"
			[view]="view"
			[today]="today"
			(navigate)="onNavigate($event)"
		></aui-agenda-navigation>

		<aui-agenda-month-view
			*ngIf="view === views.MONTH"
			[activeDate]="activeDate"
			[weekdays]="weekdays"
			[startDayOfWeek]="startDayOfWeek"
			[events]="events"
			[highlights]="highlights"
			[eventItemTemplate]="monthEventItemTemplate"
			(selectDay)="onSelectDay($event)"
			(selectEvent)="onSelectEvent($event)"
			(clickMore)="onClickMore($event)"
			(selectRange)="onSelectRange($event)"
			(displayRange)="onDisplayRange($event)"
			(swipeleft)="swipe($event)"
			(swiperight)="swipe($event)"
		></aui-agenda-month-view>
	</div>
</div>
`,
                styles: [`:host{display:block;width:100%;height:100%}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
AgendaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DateHelperService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsV0FBVyxFQUlYLFVBQVUsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUEwRCxNQUFNLDBCQUEwQixDQUFDO0FBbUMvRyxNQUFNOzs7OztJQXNCTCxZQUNTLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUI7cUJBcEJYLEtBQUs7OzhCQUdtQixJQUFJLENBQUMsTUFBTTt3QkFJdEIsSUFBSSxZQUFZLEVBQXNCOzJCQUNuQyxJQUFJLFlBQVksRUFBc0I7eUJBQ3hDLElBQUksWUFBWSxFQUFROzJCQUN0QixJQUFJLFlBQVksRUFBa0I7eUJBQ3BDLElBQUksWUFBWSxFQUFFO3dCQUdyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRTttQ0FDWSxJQUFJLE9BQU8sRUFBVztLQUtsRTs7OztJQUVHLFFBQVE7UUFDZCxJQUFJLENBQUMs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Q0FBQzthQUM5QixJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUNuQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUNqRCxDQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdEI7YUFDQSxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLGVBQWUsQ0FBQzthQUN2QjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzthQUN6QjtTQUNELENBQUMsQ0FDRixDQUFDOzs7O1lBdEpKLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQlY7Z0JBQ0EsTUFBTSxFQUFFLENBQUMsNkNBQTZDLENBQUM7Z0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7O1lBekNBLFVBQVU7WUFNRixpQkFBaUI7OztxQkFzQ3hCLEtBQUs7bUJBQ0wsS0FBSzs2QkFJTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQ0FDTCxLQUFLO3VCQUNMLE1BQU07MEJBQ04sTUFBTTt3QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0VGVtcGxhdGVSZWYsXG5cdE9uSW5pdCxcblx0T25DaGFuZ2VzLFxuXHRPbkRlc3Ryb3ksXG5cdEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzL29ic2VydmFibGUvdGltZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBWSUVXUywgREFZUywgRGF0ZVJhbmdlSW50ZXJmYWNlLCBFdmVudEludGVyZmFjZSwgSGlnaExpZ2h0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYScsXG5cdHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJhZ2VuZGFTaXplJCB8IGFzeW5jXCIgY2xhc3M9XCJvLWFnZW5kYVwiPlxuXHQ8ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX2lubmVyXCI+XG5cdFx0PGF1aS1hZ2VuZGEtbmF2aWdhdGlvblxuXHRcdFx0W2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG5cdFx0XHRbdmlld109XCJ2aWV3XCJcblx0XHRcdFt0b2RheV09XCJ0b2RheVwiXG5cdFx0XHQobmF2aWdhdGUpPVwib25OYXZpZ2F0ZSgkZXZlbnQpXCJcblx0XHQ+PC9hdWktYWdlbmRhLW5hdmlnYXRpb24+XG5cblx0XHQ8YXVpLWFnZW5kYS1tb250aC12aWV3XG5cdFx0XHQqbmdJZj1cInZpZXcgPT09IHZpZXdzLk1PTlRIXCJcblx0XHRcdFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuXHRcdFx0W3dlZWtkYXlzXT1cIndlZWtkYXlzXCJcblx0XHRcdFtzdGFydERheU9mV2Vla109XCJzdGFydERheU9mV2Vla1wiXG5cdFx0XHRbZXZlbnRzXT1cImV2ZW50c1wiXG5cdFx0XHRbaGlnaGxpZ2h0c109XCJoaWdobGlnaHRzXCJcblx0XHRcdFtldmVudEl0ZW1UZW1wbGF0ZV09XCJtb250aEV2ZW50SXRlbVRlbXBsYXRlXCJcblx0XHRcdChzZWxlY3REYXkpPVwib25TZWxlY3REYXkoJGV2ZW50KVwiXG5cdFx0XHQoc2VsZWN0RXZlbnQpPVwib25TZWxlY3RFdmVudCgkZXZlbnQpXCJcblx0XHRcdChjbGlja01vcmUpPVwib25DbGlja01vcmUoJGV2ZW50KVwiXG5cdFx0XHQoc2VsZWN0UmFuZ2UpPVwib25TZWxlY3RSYW5nZSgkZXZlbnQpXCJcblx0XHRcdChkaXNwbGF5UmFuZ2UpPVwib25EaXNwbGF5UmFuZ2UoJGV2ZW50KVwiXG5cdFx0XHQoc3dpcGVsZWZ0KT1cInN3aXBlKCRldmVudClcIlxuXHRcdFx0KHN3aXBlcmlnaHQpPVwic3dpcGUoJGV2ZW50KVwiXG5cdFx0PjwvYXVpLWFnZW5kYS1tb250aC12aWV3PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1gXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFnZW5kYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXHQvLyBEZWZhdWx0XG5cdEBJbnB1dCgpIHB1YmxpYyBldmVudHM6IEV2ZW50SW50ZXJmYWNlW107XG5cdEBJbnB1dCgpIHB1YmxpYyB2aWV3OiBWSUVXUztcblx0cHVibGljIHZpZXdzID0gVklFV1M7XG5cblx0Ly8gTW9udGggdmlld1xuXHRASW5wdXQoKSBwdWJsaWMgc3RhcnREYXlPZldlZWs6IERBWVMgPSBEQVlTLk1PTkRBWTsgLy8gU3RhcnQgb2YgdGhlIHdlZWsgKDAgPSBzdW5kYXksIDEgPSBtb25kYXksIC4uLilcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZURhdGU6IERhdGU7XG5cdEBJbnB1dCgpIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdoTGlnaHRJbnRlcmZhY2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBtb250aEV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRAT3V0cHV0KCkgcHVibGljIG5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlUmFuZ2VJbnRlcmZhY2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0UmFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZUludGVyZmFjZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3REYXkgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50SW50ZXJmYWNlPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgYWdlbmRhU2l6ZSQ7XG5cdHB1YmxpYyB3ZWVrZGF5czogREFZU1tdID0gWzEsIDIsIDMsIDQsIDUsIDYsIDBdO1xuXHRwdWJsaWMgdG9kYXk6IERhdGUgPSB0aGlzLmdldFRvZGF5KCk7XG5cdHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgZGF0ZUhlbHBlclNlcnZpY2U6IERhdGVIZWxwZXJTZXJ2aWNlXG5cdCkge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy53YXRjaEFnZW5kYVNpemUoKTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG5cdFx0aWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5zdGFydERheU9mV2Vlaykge1xuXHRcdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuTU9OVEgpIHtcblx0XHRcdFx0dGhpcy53ZWVrZGF5cyA9IHRoaXMuZGF0ZUhlbHBlclNlcnZpY2Uub3JkZXJXZWVrRGF5cyhjaGFuZ2VzLnN0YXJ0RGF5T2ZXZWVrLmN1cnJlbnRWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN3aXBlKGUpIHtcblx0XHRpZiAoZS5wb2ludGVyVHlwZSAhPT0gJ3RvdWNoJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChlLnR5cGUgPT09ICdzd2lwZWxlZnQnKSB7XG5cdFx0XHR0aGlzLm5leHRNb250aCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChlLnR5cGUgPT09ICdzd2lwZXJpZ2h0Jykge1xuXHRcdFx0dGhpcy5wcmV2TW9udGgoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG5cdFx0dGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwdWJsaWMgb25OYXZpZ2F0ZShkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cdH1cblxuXHRwdWJsaWMgb25EaXNwbGF5UmFuZ2UocmFuZ2U6IERhdGVSYW5nZUludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUuZW1pdChyYW5nZSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3REYXkoZGF0ZTogRGF0ZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RGF5LmVtaXQoZGF0ZSk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHR9XG5cblx0cHVibGljIG9uQ2xpY2tNb3JlKGRhdGU6IERhdGUpIHtcblx0XHR0aGlzLmNsaWNrTW9yZS5lbWl0KGRhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRUb2RheSgpOiBEYXRlIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXHRcdHJldHVybiBkYXRlO1xuXHR9XG5cblx0cHVibGljIHByZXZNb250aCgpOiB2b2lkIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcblx0XHR0aGlzLm9uTmF2aWdhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgLSAxLCAxKSk7XG5cdH1cblxuXHRwdWJsaWMgbmV4dE1vbnRoKCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMub25OYXZpZ2F0ZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEpKTtcblx0fVxuXG5cdHB1YmxpYyBvblNlbGVjdFJhbmdlKHJhbmdlOiBEYXRlUmFuZ2VJbnRlcmZhY2UpIHtcblx0XHR0aGlzLnNlbGVjdFJhbmdlLmVtaXQocmFuZ2UpO1xuXHR9XG5cblx0cHJpdmF0ZSB3YXRjaEFnZW5kYVNpemUoKTogdm9pZCB7XG5cdFx0dGhpcy5hZ2VuZGFTaXplJCA9IHRpbWVyKDAsIDI1MClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcblx0XHRcdFx0bWFwKCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0bWFwKCh3aWR0aCkgPT4ge1xuXHRcdFx0XHRcdGlmICh3aWR0aCA+IDgwMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdvLWFnZW5kYS0tYmlnJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdvLWFnZW5kYS0tc21hbGwnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cbn1cbiJdfQ==