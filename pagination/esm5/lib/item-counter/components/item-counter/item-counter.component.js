/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ITEM_COUNTER_LABEL } from '../../item-counter.conf';
var ItemCounterComponent = /** @class */ (function () {
    function ItemCounterComponent(label) {
        this.setClass = true;
        this.currentFrom = 1;
        this.currentTo = this.amountPerPage;
        if (label && !this.label) {
            this.label = label;
        }
        else if (!this.label) {
            this.label = {
                singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
                plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
            };
        }
    }
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.setFromTo = /**
     * @return {?}
     */
    function () {
        this.currentFrom = (this.amountPerPage * (this.currentPage - 1)) + 1;
        /* tslint:disable:max-line-length */
        this.currentTo = (this.amountPerPage * this.currentPage) <= this.totalAmount ? this.amountPerPage * this.currentPage : this.totalAmount;
        /* tslint:enable:max-line-length */
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setFromTo();
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setFromTo();
    };
    ItemCounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-item-counter',
                    template: "<div class=\"m-item-counter\">\n    {{ label }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inline-block;vertical-align:top}.m-item-counter{line-height:3rem}"],
                },] },
    ];
    /** @nocollapse */
    ItemCounterComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ITEM_COUNTER_LABEL,] }] }
    ]; };
    ItemCounterComponent.propDecorators = {
        setClass: [{ type: HostBinding, args: ['class.aui-item-counter',] }],
        currentPage: [{ type: Input }],
        totalAmount: [{ type: Input }],
        amountPerPage: [{ type: Input }],
        label: [{ type: Input }]
    };
    return ItemCounterComponent;
}());
export { ItemCounterComponent };
function ItemCounterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ItemCounterComponent.prototype.setClass;
    /** @type {?} */
    ItemCounterComponent.prototype.currentPage;
    /** @type {?} */
    ItemCounterComponent.prototype.totalAmount;
    /** @type {?} */
    ItemCounterComponent.prototype.amountPerPage;
    /** @type {?} */
    ItemCounterComponent.prototype.label;
    /** @type {?} */
    ItemCounterComponent.prototype.currentFrom;
    /** @type {?} */
    ItemCounterComponent.prototype.currentTo;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFHTCx1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQXNCNUQsOEJBQXdDLEtBQVU7d0JBVkEsSUFBSTsyQkFPakMsQ0FBQzt5QkFDSCxJQUFJLENBQUMsYUFBYTtRQUdwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLHNEQUFzRDtnQkFDaEUsTUFBTSxFQUFFLHVEQUF1RDthQUMvRCxDQUFDO1NBQ0Y7S0FDRDs7OztJQUVNLHdDQUFTOzs7O1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUVyRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFJbEksdUNBQVE7Ozs7UUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0lBR1gsMENBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7Z0JBM0NsQixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJEQUdWO29CQUNBLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxNQUFNLEVBQUUsQ0FBQyxpRkFBaUYsQ0FBQztpQkFDM0Y7Ozs7Z0RBWWEsTUFBTSxTQUFDLGtCQUFrQjs7OzJCQVZyQyxXQUFXLFNBQUMsd0JBQXdCOzhCQUVwQyxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzsrQkEzQlA7O1NBcUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5qZWN0LFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRPbkNoYW5nZXMsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVRFTV9DT1VOVEVSX0xBQkVMIH0gZnJvbSAnLi4vLi4vaXRlbS1jb3VudGVyLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaXRlbS1jb3VudGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1pdGVtLWNvdW50ZXJcIj5cbiAgICB7eyBsYWJlbCB9fVxuPC9kaXY+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH0ubS1pdGVtLWNvdW50ZXJ7bGluZS1oZWlnaHQ6M3JlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWl0ZW0tY291bnRlcicpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyO1xuXHRASW5wdXQoKSB0b3RhbEFtb3VudDogbnVtYmVyO1xuXHRASW5wdXQoKSBhbW91bnRQZXJQYWdlOiBudW1iZXI7XG5cdEBJbnB1dCgpIGxhYmVsOiBhbnk7XG5cblx0cHVibGljIGN1cnJlbnRGcm9tID0gMTtcblx0cHVibGljIGN1cnJlbnRUbyA9IHRoaXMuYW1vdW50UGVyUGFnZTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KElURU1fQ09VTlRFUl9MQUJFTCkgbGFiZWw6IGFueSkge1xuXHRcdGlmIChsYWJlbCAmJiAhdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSB7XG5cdFx0XHRcdHNpbmd1bGFyOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbScsXG5cdFx0XHRcdHBsdXJhbDogJyV7Y3VycmVudEZyb219IC0gJXtjdXJyZW50VG99IG9mICV7dG90YWxBbW91bnR9IGl0ZW1zJyxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEZyb21UbygpIHtcblx0XHR0aGlzLmN1cnJlbnRGcm9tID0gKHRoaXMuYW1vdW50UGVyUGFnZSAqICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkpICsgMTtcblx0XHQvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblx0XHR0aGlzLmN1cnJlbnRUbyA9ICh0aGlzLmFtb3VudFBlclBhZ2UgKiB0aGlzLmN1cnJlbnRQYWdlKSA8PSB0aGlzLnRvdGFsQW1vdW50ID8gdGhpcy5hbW91bnRQZXJQYWdlICogdGhpcy5jdXJyZW50UGFnZSA6IHRoaXMudG90YWxBbW91bnQ7XG5cdFx0LyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblx0fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldEZyb21UbygpO1xuXHR9XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuc2V0RnJvbVRvKCk7XG5cdH1cbn1cbiJdfQ==