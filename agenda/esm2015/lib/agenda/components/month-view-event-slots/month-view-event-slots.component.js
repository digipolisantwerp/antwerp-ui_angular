/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
export class MonthViewEventSlotsComponent {
    constructor() {
        this.slots = [];
        this.selectEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitSelectEvent(event) {
        this.selectEvent.emit(event);
    }
}
MonthViewEventSlotsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-agenda-month-view-event-slots',
                template: `<div class="aui-agenda-month-view-event-slots">
	<aui-agenda-month-view-event-slot
		*ngFor="let slot of slots"
		[event]="slot.event"
		[meta]="slot.meta"
		[display]="slot.display"
		[template]="eventItemTemplate"
		(click)="emitSelectEvent(slot.event)"
	></aui-agenda-month-view-event-slot>
</div>

`,
            },] },
];
MonthViewEventSlotsComponent.propDecorators = {
    slots: [{ type: Input }],
    eventItemTemplate: [{ type: Input }],
    selectEvent: [{ type: Output }]
};
function MonthViewEventSlotsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.slots;
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.eventItemTemplate;
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.selectEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy1ldmVudC1zbG90cy9tb250aC12aWV3LWV2ZW50LXNsb3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQnBGLE1BQU07O3FCQUNvQyxFQUFFOzJCQUVaLElBQUksWUFBWSxFQUFrQjs7Ozs7O0lBRTFELGVBQWUsQ0FBQyxLQUFxQjtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztZQXJCOUIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXVjthQUNBOzs7b0JBRUMsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRJbnRlcmZhY2UsIFNsb3RJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi90eXBlcy9hZ2VuZGEudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHMnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdHNcIj5cblx0PGF1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90XG5cdFx0Km5nRm9yPVwibGV0IHNsb3Qgb2Ygc2xvdHNcIlxuXHRcdFtldmVudF09XCJzbG90LmV2ZW50XCJcblx0XHRbbWV0YV09XCJzbG90Lm1ldGFcIlxuXHRcdFtkaXNwbGF5XT1cInNsb3QuZGlzcGxheVwiXG5cdFx0W3RlbXBsYXRlXT1cImV2ZW50SXRlbVRlbXBsYXRlXCJcblx0XHQoY2xpY2spPVwiZW1pdFNlbGVjdEV2ZW50KHNsb3QuZXZlbnQpXCJcblx0PjwvYXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3Q+XG48L2Rpdj5cblxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3RXZlbnRTbG90c0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBzbG90czogU2xvdEludGVyZmFjZVtdID0gW107XG5cdEBJbnB1dCgpIHB1YmxpYyBldmVudEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRJbnRlcmZhY2U+KCk7XG5cblx0cHVibGljIGVtaXRTZWxlY3RFdmVudChldmVudDogRXZlbnRJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdEV2ZW50LmVtaXQoZXZlbnQpO1xuXHR9XG59XG4iXX0=