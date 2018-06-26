/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { VIEWS } from '../../types/agenda.types';
export class NavigationComponent {
    constructor() {
        this.cssClass = true;
        this.navigate = new EventEmitter();
        this.views = VIEWS;
        this.navigate$ = new Subject();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navigate$
            .pipe(takeUntil(this.componentDestroyed$), distinctUntilChanged(), debounceTime(200))
            .subscribe((value) => {
            this.navigate.emit(value);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
    /**
     * @return {?}
     */
    prev() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.changeDate(date, -1);
    }
    /**
     * @return {?}
     */
    next() {
        const /** @type {?} */ date = new Date(this.activeDate);
        this.changeDate(date, 1);
    }
    /**
     * @return {?}
     */
    goToToday() {
        this.navigate$.next(this.today);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeDate(date, orient) {
        if (this.view === VIEWS.DAY) {
            return this.navigate$.next(this.changeDay(date, orient));
        }
        if (this.view === VIEWS.MONTH) {
            return this.navigate$.next(this.changeMonth(date, orient));
        }
        if (this.view === VIEWS.YEAR) {
            return this.navigate$.next(this.changeYear(date, orient));
        }
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeDay(date, orient) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + orient);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeMonth(date, orient) {
        return new Date(date.getFullYear(), date.getMonth() + orient, 1);
    }
    /**
     * @param {?} date
     * @param {?} orient
     * @return {?}
     */
    changeYear(date, orient) {
        return new Date(date.getFullYear() + orient, 0, 1);
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-navigation',
                template: `<h4>
	<ng-container *ngIf="view === views.DAY">{{ activeDate | date:'dd/MM/y' }}</ng-container>
	<ng-container *ngIf="view === views.MONTH">{{ activeDate | date:'M' | monthPipe }} {{ activeDate | date:'y' }}</ng-container>
	<ng-container *ngIf="view === views.YEAR">{{ activeDate | date:'y' }}</ng-container>
</h4>

<div class="o-agenda__nav">
	<button tabindex="-1" type="button" aria-label="previous month" class="o-agenda__nav-previous a-button has-icon" (click)="prev()">
		<i class="fa fa-angle-left"></i>
	</button>

	<button tabindex="0" type="button" aria-label="today" class="a-button" (click)="goToToday()">
		Vandaag
	</button>

	<button tabindex="0" type="button" aria-label="next month" class="o-agenda__nav-next a-button has-icon" (click)="next()">
		<i class="fa fa-angle-right"></i>
	</button>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
NavigationComponent.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class.o-agenda__header',] }],
    activeDate: [{ type: Input }],
    view: [{ type: Input }],
    today: [{ type: Input }],
    navigate: [{ type: Output }]
};
function NavigationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationComponent.prototype.cssClass;
    /** @type {?} */
    NavigationComponent.prototype.activeDate;
    /** @type {?} */
    NavigationComponent.prototype.view;
    /** @type {?} */
    NavigationComponent.prototype.today;
    /** @type {?} */
    NavigationComponent.prototype.navigate;
    /** @type {?} */
    NavigationComponent.prototype.views;
    /** @type {?} */
    NavigationComponent.prototype.navigate$;
    /** @type {?} */
    NavigationComponent.prototype.componentDestroyed$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxHQUdYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUEwQmpELE1BQU07O3dCQUNvRCxJQUFJO3dCQUlqQyxJQUFJLFlBQVksRUFBUTtxQkFDckMsS0FBSzt5QkFDYyxJQUFJLE9BQU8sRUFBRTttQ0FDQyxJQUFJLE9BQU8sRUFBVzs7Ozs7SUFFL0QsUUFBUTtRQUNkLElBQUksQ0FBQyxTQUFTO2FBQ1osSUFBSSxDQUNKLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFDbkMsb0JBQW9CLEVBQUUsRUFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNqQjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQzs7Ozs7SUFHRSxXQUFXO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztJQUc5QixJQUFJO1FBQ1YsdUJBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUdwQixJQUFJO1FBQ1YsdUJBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHbkIsU0FBUztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUcxQixVQUFVLENBQUMsSUFBVSxFQUFFLE1BQWM7UUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEOzs7Ozs7O0lBR0ssU0FBUyxDQUFDLElBQVUsRUFBRSxNQUFjO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQzs7Ozs7OztJQUd4RSxXQUFXLENBQUMsSUFBVSxFQUFFLE1BQWM7UUFDNUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBRzNELFVBQVUsQ0FBQyxJQUFVLEVBQUUsTUFBYztRQUMzQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7WUF4RnBELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQlY7Z0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozt1QkFFQyxXQUFXLFNBQUMsd0JBQXdCO3lCQUNwQyxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRIb3N0QmluZGluZyxcblx0T25Jbml0LFxuXHRPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFZJRVdTIH0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1uYXZpZ2F0aW9uJyxcblx0dGVtcGxhdGU6IGA8aDQ+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3ID09PSB2aWV3cy5EQVlcIj57eyBhY3RpdmVEYXRlIHwgZGF0ZTonZGQvTU0veScgfX08L25nLWNvbnRhaW5lcj5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcgPT09IHZpZXdzLk1PTlRIXCI+e3sgYWN0aXZlRGF0ZSB8IGRhdGU6J00nIHwgbW9udGhQaXBlIH19IHt7IGFjdGl2ZURhdGUgfCBkYXRlOid5JyB9fTwvbmctY29udGFpbmVyPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwidmlldyA9PT0gdmlld3MuWUVBUlwiPnt7IGFjdGl2ZURhdGUgfCBkYXRlOid5JyB9fTwvbmctY29udGFpbmVyPlxuPC9oND5cblxuPGRpdiBjbGFzcz1cIm8tYWdlbmRhX19uYXZcIj5cblx0PGJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBtb250aFwiIGNsYXNzPVwiby1hZ2VuZGFfX25hdi1wcmV2aW91cyBhLWJ1dHRvbiBoYXMtaWNvblwiIChjbGljayk9XCJwcmV2KClcIj5cblx0XHQ8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG5cdDwvYnV0dG9uPlxuXG5cdDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJ0b2RheVwiIGNsYXNzPVwiYS1idXR0b25cIiAoY2xpY2spPVwiZ29Ub1RvZGF5KClcIj5cblx0XHRWYW5kYWFnXG5cdDwvYnV0dG9uPlxuXG5cdDxidXR0b24gdGFiaW5kZXg9XCIwXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJuZXh0IG1vbnRoXCIgY2xhc3M9XCJvLWFnZW5kYV9fbmF2LW5leHQgYS1idXR0b24gaGFzLWljb25cIiAoY2xpY2spPVwibmV4dCgpXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cblx0PC9idXR0b24+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm8tYWdlbmRhX19oZWFkZXInKSBwdWJsaWMgY3NzQ2xhc3MgPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlRGF0ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlldzogVklFV1M7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b2RheTogRGF0ZTtcblx0QE91dHB1dCgpIHB1YmxpYyBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblx0cHVibGljIHZpZXdzID0gVklFV1M7XG5cdHB1YmxpYyBuYXZpZ2F0ZSQ6IFN1YmplY3Q8RGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm5hdmlnYXRlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpLFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHRkZWJvdW5jZVRpbWUoMjAwKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZS5lbWl0KHZhbHVlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHVibGljIG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KHRydWUpO1xuXHRcdHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHVibGljIHByZXYoKTogdm9pZCB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG5cdFx0dGhpcy5jaGFuZ2VEYXRlKGRhdGUsIC0xKTtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuXHRcdHRoaXMuY2hhbmdlRGF0ZShkYXRlLCAxKTtcblx0fVxuXG5cdHB1YmxpYyBnb1RvVG9kYXkoKTogdm9pZCB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSQubmV4dCh0aGlzLnRvZGF5KTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VEYXRlKGRhdGU6IERhdGUsIG9yaWVudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmlldyA9PT0gVklFV1MuREFZKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZSQubmV4dCh0aGlzLmNoYW5nZURheShkYXRlLCBvcmllbnQpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52aWV3ID09PSBWSUVXUy5NT05USCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubmF2aWdhdGUkLm5leHQodGhpcy5jaGFuZ2VNb250aChkYXRlLCBvcmllbnQpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52aWV3ID09PSBWSUVXUy5ZRUFSKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uYXZpZ2F0ZSQubmV4dCh0aGlzLmNoYW5nZVllYXIoZGF0ZSwgb3JpZW50KSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNoYW5nZURheShkYXRlOiBEYXRlLCBvcmllbnQ6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkgKyBvcmllbnQpO1xuXHR9XG5cblx0cHVibGljIGNoYW5nZU1vbnRoKGRhdGU6IERhdGUsIG9yaWVudDogbnVtYmVyKTogRGF0ZSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgb3JpZW50LCAxKTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VZZWFyKGRhdGU6IERhdGUsIG9yaWVudDogbnVtYmVyKTogRGF0ZSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSArIG9yaWVudCwgMCwgMSk7XG5cdH1cbn1cbiJdfQ==