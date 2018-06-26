/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() {
        this.value = 0;
        this.max = 0;
    }
    /**
     * @return {?}
     */
    calcProgress() {
        if (this.max > 0 && this.value > 0) {
            const /** @type {?} */ res = (this.value / this.max);
            return Math.floor(res * 100) + '%';
        }
        return 0;
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-progress-bar',
                template: `<div class="aui-progress-bar m-progress">
	<div class="m-progress__inner">
		<div class="m-progress__bar" role="progressbar" aria-valuemin="0" [attr.aria-valuemax]="max" [attr.aria-valuenow]="value" [ngStyle]="{'width': calcProgress()}">
		</div>
	</div>
</div>
`,
            },] },
];
ProgressBarComponent.propDecorators = {
    value: [{ type: Input }],
    max: [{ type: Input }]
};
function ProgressBarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressBarComponent.prototype.value;
    /** @type {?} */
    ProgressBarComponent.prototype.max;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Byb2dyZXNzLWJhci8iLCJzb3VyY2VzIjpbImxpYi9wcm9ncmVzcy1iYXIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBWS9FLE1BQU07O3FCQUNtQixDQUFDO21CQUNILENBQUM7Ozs7O0lBRWhCLFlBQVk7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLHVCQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDbkM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7O1lBcEJWLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7OztDQU1WO2FBQ0E7OztvQkFFQyxLQUFLO2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1wcm9ncmVzcy1iYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhdWktcHJvZ3Jlc3MtYmFyIG0tcHJvZ3Jlc3NcIj5cblx0PGRpdiBjbGFzcz1cIm0tcHJvZ3Jlc3NfX2lubmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cIm0tcHJvZ3Jlc3NfX2JhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJtYXhcIiBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGNhbGNQcm9ncmVzcygpfVwiPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgdmFsdWUgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4ID0gMDtcblxuXHRwdWJsaWMgY2FsY1Byb2dyZXNzKCkge1xuXHRcdGlmICh0aGlzLm1heCA+IDAgJiYgdGhpcy52YWx1ZSA+IDApIHtcblx0XHRcdGNvbnN0IHJlcyA9ICh0aGlzLnZhbHVlIC8gdGhpcy5tYXgpO1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IocmVzICogMTAwKSArICclJztcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fVxufVxuIl19