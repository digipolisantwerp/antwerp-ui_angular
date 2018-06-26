/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ITEMS_PER_PAGE_LABEL } from '../../item-counter.conf';
/** @enum {string} */
const sizes = {
    S: /** @type {?} */ ('S'),
    R: /** @type {?} */ ('R'),
    L: /** @type {?} */ ('L'),
};
export { sizes };
export class ItemsPerPageComponent {
    /**
     * @param {?} label
     */
    constructor(label) {
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
    setAmount(changedValue) {
        this.amountPerPage = changedValue;
        this.returnAmount.emit(this.amountPerPage);
    }
}
ItemsPerPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-items-per-page',
                template: `<div class="m-items-per-page">
    <div class="a-input has-icon-right" [ngClass]="[inputSizes[size]]">
        <div class="a-input__wrapper">
            <select name="input-selected" id="input-select" [ngModel]="amountPerPage" (ngModelChange)="setAmount($event)">
                <option *ngFor="let amountOption of selectOptions" [value]="amountOption">{{ amountOption }}</option>
            </select>
            <span class="fa fa-angle-down"></span>
        </div>

        <label class="a-input__label" for="input-text">{{ label }}</label>
    </div>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`:host{display:inline-block;vertical-align:top}.m-items-per-page .a-input .a-input__wrapper{display:inline-block;margin-right:.5rem}`],
            },] },
];
/** @nocollapse */
ItemsPerPageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ITEMS_PER_PAGE_LABEL,] }] }
];
ItemsPerPageComponent.propDecorators = {
    setClass: [{ type: HostBinding, args: ['class.aui-items-per-page',] }],
    label: [{ type: Input }],
    size: [{ type: Input }],
    selectOptions: [{ type: Input }],
    amountPerPage: [{ type: Input }],
    returnAmount: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcGVyLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9pdGVtLWNvdW50ZXIvY29tcG9uZW50cy9pdGVtcy1wZXItcGFnZS9pdGVtcy1wZXItcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozt5QkFHckQsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7OztBQXFCYixNQUFNOzs7O0lBZUwsWUFDK0IsS0FBSzswQkFmaEI7WUFDbkIsQ0FBQyxFQUFFLGdCQUFnQjtZQUNuQixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxnQkFBZ0I7U0FDbkI7d0JBRW1ELElBQUk7b0JBR2pDLEtBQUssQ0FBQyxDQUFDOzRCQUdpQixJQUFJLFlBQVksRUFBVTtRQUt4RSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxnQkFBZ0I7YUFDeEIsQ0FBQztTQUNGO0tBQ0Q7Ozs7O0lBRU0sU0FBUyxDQUFDLFlBQVk7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7O1lBaEQ1QyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Q0FZVjtnQkFDQSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFLENBQUMscUlBQXFJLENBQUM7YUFDL0k7Ozs7NENBaUJFLE1BQU0sU0FBQyxvQkFBb0I7Ozt1QkFUNUIsV0FBVyxTQUFDLDBCQUEwQjtvQkFFdEMsS0FBSzttQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRV9MQUJFTCB9IGZyb20gJy4uLy4uL2l0ZW0tY291bnRlci5jb25mJztcblxuZXhwb3J0IGVudW0gc2l6ZXMge1xuXHRTID0gPGFueT4nUycsXG5cdFIgPSA8YW55PidSJyxcblx0TCA9IDxhbnk+J0wnLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaXRlbXMtcGVyLXBhZ2UnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWl0ZW1zLXBlci1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbbmdDbGFzc109XCJbaW5wdXRTaXplc1tzaXplXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImEtaW5wdXRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImlucHV0LXNlbGVjdGVkXCIgaWQ9XCJpbnB1dC1zZWxlY3RcIiBbbmdNb2RlbF09XCJhbW91bnRQZXJQYWdlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0QW1vdW50KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBhbW91bnRPcHRpb24gb2Ygc2VsZWN0T3B0aW9uc1wiIFt2YWx1ZV09XCJhbW91bnRPcHRpb25cIj57eyBhbW91bnRPcHRpb24gfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbFwiIGZvcj1cImlucHV0LXRleHRcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5tLWl0ZW1zLXBlci1wYWdlIC5hLWlucHV0IC5hLWlucHV0X193cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDouNXJlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNQZXJQYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGlucHV0U2l6ZXMgPSB7XG5cdFx0UzogJ2EtaW5wdXQtLXNtYWxsJyxcblx0XHRSOiAnJyxcblx0XHRMOiAnYS1pbnB1dC0tbGFyZ2UnLFxuXHR9O1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWl0ZW1zLXBlci1wYWdlJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGxhYmVsOiBhbnk7XG5cdEBJbnB1dCgpIHNpemU6IHNpemVzID0gc2l6ZXMuUjtcblx0QElucHV0KCkgc2VsZWN0T3B0aW9uczogbnVtYmVyW107XG5cdEBJbnB1dCgpIGFtb3VudFBlclBhZ2U6IG51bWJlcjtcblx0QE91dHB1dCgpIHJldHVybkFtb3VudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KElURU1TX1BFUl9QQUdFX0xBQkVMKSBsYWJlbFxuXHQpIHtcblx0XHRpZiAobGFiZWwgJiYgIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSBsYWJlbDtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0ge1xuXHRcdFx0XHRzaW5ndWxhcjogJ2l0ZW0gcGVyIHBhZ2UnLFxuXHRcdFx0XHRwbHVyYWw6ICdpdGVtcyBwZXIgcGFnZScsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZXRBbW91bnQoY2hhbmdlZFZhbHVlKSB7XG5cdFx0dGhpcy5hbW91bnRQZXJQYWdlID0gY2hhbmdlZFZhbHVlO1xuXHRcdHRoaXMucmV0dXJuQW1vdW50LmVtaXQodGhpcy5hbW91bnRQZXJQYWdlKTtcblx0fVxufVxuIl19