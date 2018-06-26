/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class MonthViewEventSlotComponent {
}
MonthViewEventSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view-event-slot',
                template: `<ng-template #defaultTemplate let-event="event">
	<div class="a-event" [ngStyle]="{ 'background-color': event.fullDay ? event.color : null }" [ngClass]="{ 'a-event--light': event.fullDay }">
		<div *ngIf="!event.fullDay" class="a-event__bar" [ngStyle]="{ 'background-color': event.color }"></div>

		<div class="a-event__content">
			<div *ngIf="event.iconBefore || event.title" class="a-event__main">
				<span *ngIf="event.iconBefore" class="{{ event.iconBefore }} a-event__icon"></span><span *ngIf="event.title" class="a-event__title">{{ event.title }}</span>
			</div>

			<div *ngIf="event.iconAfter || !event.fullDay" class="a-event__extra">
				<span *ngIf="!event.fullDay" class="a-event__meta">{{ event.startDate | date:'HH:mm' }}</span><span *ngIf="event.iconAfter" class="{{ event.iconAfter }} a-event__icon"></span>
			</div>
		</div>
	</div>
</ng-template>

<div class="o-agenda__table-event" [ngStyle]="{
	left: display.left,
	top: display.top,
	width: display.width
}">
	<ng-container *ngTemplateOutlet="template ? template : defaultTemplate; context: { event: event }"></ng-container>
</div>
`,
            },] },
];
MonthViewEventSlotComponent.propDecorators = {
    event: [{ type: Input }],
    meta: [{ type: Input }],
    display: [{ type: Input }],
    template: [{ type: Input }]
};
function MonthViewEventSlotComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewEventSlotComponent.prototype.event;
    /** @type {?} */
    MonthViewEventSlotComponent.prototype.meta;
    /** @type {?} */
    MonthViewEventSlotComponent.prototype.display;
    /** @type {?} */
    MonthViewEventSlotComponent.prototype.template;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1ldmVudC1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnZW5kYS8iLCJzb3VyY2VzIjpbImxpYi9hZ2VuZGEvY29tcG9uZW50cy9tb250aC12aWV3LWV2ZW50LXNsb3QvbW9udGgtdmlldy1ldmVudC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK0I5RCxNQUFNOzs7WUEzQkwsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1QlY7YUFDQTs7O29CQUVDLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdE1ldGFJbnRlcmZhY2UsIFNsb3REaXNwbGF5SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYWdlbmRhLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3QnLFxuXHR0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1ldmVudD1cImV2ZW50XCI+XG5cdDxkaXYgY2xhc3M9XCJhLWV2ZW50XCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGV2ZW50LmZ1bGxEYXkgPyBldmVudC5jb2xvciA6IG51bGwgfVwiIFtuZ0NsYXNzXT1cInsgJ2EtZXZlbnQtLWxpZ2h0JzogZXZlbnQuZnVsbERheSB9XCI+XG5cdFx0PGRpdiAqbmdJZj1cIiFldmVudC5mdWxsRGF5XCIgY2xhc3M9XCJhLWV2ZW50X19iYXJcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogZXZlbnQuY29sb3IgfVwiPjwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImEtZXZlbnRfX2NvbnRlbnRcIj5cblx0XHRcdDxkaXYgKm5nSWY9XCJldmVudC5pY29uQmVmb3JlIHx8IGV2ZW50LnRpdGxlXCIgY2xhc3M9XCJhLWV2ZW50X19tYWluXCI+XG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwiZXZlbnQuaWNvbkJlZm9yZVwiIGNsYXNzPVwie3sgZXZlbnQuaWNvbkJlZm9yZSB9fSBhLWV2ZW50X19pY29uXCI+PC9zcGFuPjxzcGFuICpuZ0lmPVwiZXZlbnQudGl0bGVcIiBjbGFzcz1cImEtZXZlbnRfX3RpdGxlXCI+e3sgZXZlbnQudGl0bGUgfX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiAqbmdJZj1cImV2ZW50Lmljb25BZnRlciB8fCAhZXZlbnQuZnVsbERheVwiIGNsYXNzPVwiYS1ldmVudF9fZXh0cmFcIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCIhZXZlbnQuZnVsbERheVwiIGNsYXNzPVwiYS1ldmVudF9fbWV0YVwiPnt7IGV2ZW50LnN0YXJ0RGF0ZSB8IGRhdGU6J0hIOm1tJyB9fTwvc3Bhbj48c3BhbiAqbmdJZj1cImV2ZW50Lmljb25BZnRlclwiIGNsYXNzPVwie3sgZXZlbnQuaWNvbkFmdGVyIH19IGEtZXZlbnRfX2ljb25cIj48L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiby1hZ2VuZGFfX3RhYmxlLWV2ZW50XCIgW25nU3R5bGVdPVwie1xuXHRsZWZ0OiBkaXNwbGF5LmxlZnQsXG5cdHRvcDogZGlzcGxheS50b3AsXG5cdHdpZHRoOiBkaXNwbGF5LndpZHRoXG59XCI+XG5cdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogZGVmYXVsdFRlbXBsYXRlOyBjb250ZXh0OiB7IGV2ZW50OiBldmVudCB9XCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld0V2ZW50U2xvdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBldmVudDogRXZlbnRJbnRlcmZhY2U7XG5cdEBJbnB1dCgpIHB1YmxpYyBtZXRhOiBTbG90TWV0YUludGVyZmFjZTtcblx0QElucHV0KCkgcHVibGljIGRpc3BsYXk6IFNsb3REaXNwbGF5SW50ZXJmYWNlO1xuXHRASW5wdXQoKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iXX0=