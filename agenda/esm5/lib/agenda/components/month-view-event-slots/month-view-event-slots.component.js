/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
var MonthViewEventSlotsComponent = /** @class */ (function () {
    function MonthViewEventSlotsComponent() {
        this.slots = [];
        this.selectEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MonthViewEventSlotsComponent.prototype.emitSelectEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectEvent.emit(event);
    };
    MonthViewEventSlotsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-agenda-month-view-event-slots',
                    template: "<div class=\"aui-agenda-month-view-event-slots\">\n\t<aui-agenda-month-view-event-slot\n\t\t*ngFor=\"let slot of slots\"\n\t\t[event]=\"slot.event\"\n\t\t[meta]=\"slot.meta\"\n\t\t[display]=\"slot.display\"\n\t\t[template]=\"eventItemTemplate\"\n\t\t(click)=\"emitSelectEvent(slot.event)\"\n\t></aui-agenda-month-view-event-slot>\n</div>\n\n",
                },] },
    ];
    MonthViewEventSlotsComponent.propDecorators = {
        slots: [{ type: Input }],
        eventItemTemplate: [{ type: Input }],
        selectEvent: [{ type: Output }]
    };
    return MonthViewEventSlotsComponent;
}());
export { MonthViewEventSlotsComponent };
function MonthViewEventSlotsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.slots;
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.eventItemTemplate;
    /** @type {?} */
    MonthViewEventSlotsComponent.prototype.selectEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1ldmVudC1zbG90cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2VuZGEvIiwic291cmNlcyI6WyJsaWIvYWdlbmRhL2NvbXBvbmVudHMvbW9udGgtdmlldy1ldmVudC1zbG90cy9tb250aC12aWV3LWV2ZW50LXNsb3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztxQkFvQjFDLEVBQUU7MkJBRVosSUFBSSxZQUFZLEVBQWtCOzs7Ozs7SUFFMUQsc0RBQWU7Ozs7Y0FBQyxLQUFxQjtRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2dCQXJCOUIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLFFBQVEsRUFBRSx1VkFXVjtpQkFDQTs7O3dCQUVDLEtBQUs7b0NBQ0wsS0FBSzs4QkFDTCxNQUFNOzt1Q0F0QlI7O1NBbUJhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEludGVyZmFjZSwgU2xvdEludGVyZmFjZSB9IGZyb20gJy4uLy4uL3R5cGVzL2FnZW5kYS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90cycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1hZ2VuZGEtbW9udGgtdmlldy1ldmVudC1zbG90c1wiPlxuXHQ8YXVpLWFnZW5kYS1tb250aC12aWV3LWV2ZW50LXNsb3Rcblx0XHQqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90c1wiXG5cdFx0W2V2ZW50XT1cInNsb3QuZXZlbnRcIlxuXHRcdFttZXRhXT1cInNsb3QubWV0YVwiXG5cdFx0W2Rpc3BsYXldPVwic2xvdC5kaXNwbGF5XCJcblx0XHRbdGVtcGxhdGVdPVwiZXZlbnRJdGVtVGVtcGxhdGVcIlxuXHRcdChjbGljayk9XCJlbWl0U2VsZWN0RXZlbnQoc2xvdC5ldmVudClcIlxuXHQ+PC9hdWktYWdlbmRhLW1vbnRoLXZpZXctZXZlbnQtc2xvdD5cbjwvZGl2PlxuXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aFZpZXdFdmVudFNsb3RzQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIHNsb3RzOiBTbG90SW50ZXJmYWNlW10gPSBbXTtcblx0QElucHV0KCkgcHVibGljIGV2ZW50SXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEludGVyZmFjZT4oKTtcblxuXHRwdWJsaWMgZW1pdFNlbGVjdEV2ZW50KGV2ZW50OiBFdmVudEludGVyZmFjZSk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0RXZlbnQuZW1pdChldmVudCk7XG5cdH1cbn1cbiJdfQ==