/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ITEMS_PER_PAGE_LABEL } from '../../item-counter.conf';
/** @enum {string} */
var sizes = {
    S: /** @type {?} */ ('S'),
    R: /** @type {?} */ ('R'),
    L: /** @type {?} */ ('L'),
};
export { sizes };
var ItemsPerPageComponent = /** @class */ (function () {
    function ItemsPerPageComponent(label) {
        this.inputSizes = {
            S: 'a-input--small',
            R: '',
            L: 'a-input--large',
        };
        this.setClass = true;
        this.size = sizes.R;
        this.returnAmount = new EventEmitter();
        if (label && !this.label) {
            this.label = label;
        }
        else if (!this.label) {
            this.label = {
                singular: 'item per page',
                plural: 'items per page',
            };
        }
    }
    /**
     * @param {?} changedValue
     * @return {?}
     */
    ItemsPerPageComponent.prototype.setAmount = /**
     * @param {?} changedValue
     * @return {?}
     */
    function (changedValue) {
        this.amountPerPage = changedValue;
        this.returnAmount.emit(this.amountPerPage);
    };
    ItemsPerPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-items-per-page',
                    template: "<div class=\"m-items-per-page\">\n    <div class=\"a-input has-icon-right\" [ngClass]=\"[inputSizes[size]]\">\n        <div class=\"a-input__wrapper\">\n            <select name=\"input-selected\" id=\"input-select\" [ngModel]=\"amountPerPage\" (ngModelChange)=\"setAmount($event)\">\n                <option *ngFor=\"let amountOption of selectOptions\" [value]=\"amountOption\">{{ amountOption }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n\n        <label class=\"a-input__label\" for=\"input-text\">{{ label }}</label>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inline-block;vertical-align:top}.m-items-per-page .a-input .a-input__wrapper{display:inline-block;margin-right:.5rem}"],
                },] },
    ];
    /** @nocollapse */
    ItemsPerPageComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ITEMS_PER_PAGE_LABEL,] }] }
    ]; };
    ItemsPerPageComponent.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-items-per-page',] }],
        label: [{ type: Input }],
        size: [{ type: Input }],
        selectOptions: [{ type: Input }],
        amountPerPage: [{ type: Input }],
        returnAmount: [{ type: Output }]
    };
    return ItemsPerPageComponent;
}());
export { ItemsPerPageComponent };
function ItemsPerPageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ItemsPerPageComponent.prototype.inputSizes;
    /** @type {?} */
    ItemsPerPageComponent.prototype.setClass;
    /** @type {?} */
    ItemsPerPageComponent.prototype.label;
    /** @type {?} */
    ItemsPerPageComponent.prototype.size;
    /** @type {?} */
    ItemsPerPageComponent.prototype.selectOptions;
    /** @type {?} */
    ItemsPerPageComponent.prototype.amountPerPage;
    /** @type {?} */
    ItemsPerPageComponent.prototype.returnAmount;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcGVyLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9pdGVtLWNvdW50ZXIvY29tcG9uZW50cy9pdGVtcy1wZXItcGFnZS9pdGVtcy1wZXItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozt5QkFHckQsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7Ozs7SUFvQ1osK0JBQytCLEtBQUs7MEJBZmhCO1lBQ25CLENBQUMsRUFBRSxnQkFBZ0I7WUFDbkIsQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsZ0JBQWdCO1NBQ25CO3dCQUVtRCxJQUFJO29CQUdqQyxLQUFLLENBQUMsQ0FBQzs0QkFHaUIsSUFBSSxZQUFZLEVBQVU7UUFLeEUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNaLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixNQUFNLEVBQUUsZ0JBQWdCO2FBQ3hCLENBQUM7U0FDRjtLQUNEOzs7OztJQUVNLHlDQUFTOzs7O2NBQUMsWUFBWTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7OztnQkFoRDVDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsNmxCQVlWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxNQUFNLEVBQUUsQ0FBQyxxSUFBcUksQ0FBQztpQkFDL0k7Ozs7Z0RBaUJFLE1BQU0sU0FBQyxvQkFBb0I7OzsyQkFUNUIsV0FBVyxTQUFDLDBCQUEwQjt3QkFFdEMsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxNQUFNOztnQ0FqRFI7O1NBb0NhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0VfTEFCRUwgfSBmcm9tICcuLi8uLi9pdGVtLWNvdW50ZXIuY29uZic7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRSID0gPGFueT4nUicsXG5cdEwgPSA8YW55PidMJyxcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWl0ZW1zLXBlci1wYWdlJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1pdGVtcy1wZXItcGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0IGhhcy1pY29uLXJpZ2h0XCIgW25nQ2xhc3NdPVwiW2lucHV0U2l6ZXNbc2l6ZV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0X193cmFwcGVyXCI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbnB1dC1zZWxlY3RlZFwiIGlkPVwiaW5wdXQtc2VsZWN0XCIgW25nTW9kZWxdPVwiYW1vdW50UGVyUGFnZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldEFtb3VudCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYW1vdW50T3B0aW9uIG9mIHNlbGVjdE9wdGlvbnNcIiBbdmFsdWVdPVwiYW1vdW50T3B0aW9uXCI+e3sgYW1vdW50T3B0aW9uIH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiYS1pbnB1dF9fbGFiZWxcIiBmb3I9XCJpbnB1dC10ZXh0XCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH0ubS1pdGVtcy1wZXItcGFnZSAuYS1pbnB1dCAuYS1pbnB1dF9fd3JhcHBlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6LjVyZW19YF0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zUGVyUGFnZUNvbXBvbmVudCB7XG5cdHB1YmxpYyBpbnB1dFNpemVzID0ge1xuXHRcdFM6ICdhLWlucHV0LS1zbWFsbCcsXG5cdFx0UjogJycsXG5cdFx0TDogJ2EtaW5wdXQtLWxhcmdlJyxcblx0fTtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS1pdGVtcy1wZXItcGFnZScpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBsYWJlbDogYW55O1xuXHRASW5wdXQoKSBzaXplOiBzaXplcyA9IHNpemVzLlI7XG5cdEBJbnB1dCgpIHNlbGVjdE9wdGlvbnM6IG51bWJlcltdO1xuXHRASW5wdXQoKSBhbW91bnRQZXJQYWdlOiBudW1iZXI7XG5cdEBPdXRwdXQoKSByZXR1cm5BbW91bnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChJVEVNU19QRVJfUEFHRV9MQUJFTCkgbGFiZWxcblx0KSB7XG5cdFx0aWYgKGxhYmVsICYmICF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IHtcblx0XHRcdFx0c2luZ3VsYXI6ICdpdGVtIHBlciBwYWdlJyxcblx0XHRcdFx0cGx1cmFsOiAnaXRlbXMgcGVyIHBhZ2UnLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2V0QW1vdW50KGNoYW5nZWRWYWx1ZSkge1xuXHRcdHRoaXMuYW1vdW50UGVyUGFnZSA9IGNoYW5nZWRWYWx1ZTtcblx0XHR0aGlzLnJldHVybkFtb3VudC5lbWl0KHRoaXMuYW1vdW50UGVyUGFnZSk7XG5cdH1cbn1cbiJdfQ==