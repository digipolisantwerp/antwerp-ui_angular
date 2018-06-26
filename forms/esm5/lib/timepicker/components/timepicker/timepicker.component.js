/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Renderer2, forwardRef } from '@angular/core';
import { FormControl, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { DateHelper } from '@acpaas-ui/js-date-utils';
import { TimepickerInputSize } from '../../types/timepicker.types';
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(formBuilder, renderer) {
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.hoursPlaceholder = 'HH';
        this.minutesPlaceholder = 'MM';
        this.hasError = false;
        this.size = TimepickerInputSize.Auto;
        this.shouldUseFallback = false;
        this.minutes = [];
        this.hours = [];
        this.timeControl = new FormControl();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shouldUseFallback = this.supportsNativeTimepicker();
        this.minutes = this.getMinutes();
        this.hours = this.getHours();
        this.fallbackForm = this.formBuilder.group({
            hours: null,
            minutes: null,
        });
        this.fallbackForm.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function (formData) {
            if (formData.hours && formData.minutes) {
                _this.updateModel(formData.hours + ":" + formData.minutes);
            }
            else {
                _this.updateModel('');
            }
        });
        this.timeControl.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function (time) {
            _this.updateModel(time);
        });
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.timeControl.setValue(value, { emitEvent: false });
        if (value) {
            var /** @type {?} */ splitted = value.split(':');
            this.fallbackForm.get('hours').setValue(splitted[0], { emitEvent: false });
            this.fallbackForm.get('minutes').setValue(splitted[1], { emitEvent: false });
        }
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.updateModel = onChange;
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TimepickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.timeControl.disable({ emitEvent: false });
            this.fallbackForm.disable({ emitEvent: false });
        }
        else {
            this.timeControl.enable({ emitEvent: false });
            this.fallbackForm.enable({ emitEvent: false });
        }
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.supportsNativeTimepicker = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this.renderer.createElement('input');
        element.type = 'time';
        return element.type === 'text';
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return Array(60).fill('').map(function (value, index) {
            return DateHelper.addLeadingZero(index);
        });
    };
    /**
     * @return {?}
     */
    TimepickerComponent.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return Array(24).fill('').map(function (value, index) {
            return DateHelper.addLeadingZero(index);
        });
    };
    TimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-timepicker',
                    template: "<div class=\"a-input\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\" *ngIf=\"!shouldUseFallback\">\n    <input type=\"time\" [formControl]=\"timeControl\">\n</div>\n\n<div *ngIf=\"shouldUseFallback\" [formGroup]=\"fallbackForm\">\n    <div class=\"a-input has-icon-right\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\">\n        <div class=\"a-input__wrapper\">\n            <select formControlName=\"hours\">\n                <option disabled value=\"null\">{{ hoursPlaceholder }}</option>\n                <option *ngFor=\"let hour of hours\" [value]=\"hour\">{{ hour }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n    </div>\n\n    <div class=\"a-input has-icon-right\" [class]=\"'a-input--' + size\" [ngClass]=\"{ 'has-error': hasError }\">\n        <div class=\"a-input__wrapper\">\n            <select formControlName=\"minutes\">\n                <option disabled value=\"null\">{{ minutesPlaceholder }}</option>\n                <option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{ minute }}</option>\n            </select>\n            <span class=\"fa fa-angle-down\"></span>\n        </div>\n    </div>\n</div>\n",
                    styles: [":host{display:block}:host .a-input{display:inline-block}:host::before{z-index:10}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TimepickerComponent; }),
                            // tslint:disable-line:no-forward-ref
                            multi: true,
                        }],
                },] },
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Renderer2 }
    ]; };
    TimepickerComponent.propDecorators = {
        hoursPlaceholder: [{ type: Input }],
        minutesPlaceholder: [{ type: Input }],
        hasError: [{ type: Input }],
        size: [{ type: Input }]
    };
    return TimepickerComponent;
}());
export { TimepickerComponent };
function TimepickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TimepickerComponent.prototype.hoursPlaceholder;
    /** @type {?} */
    TimepickerComponent.prototype.minutesPlaceholder;
    /** @type {?} */
    TimepickerComponent.prototype.hasError;
    /** @type {?} */
    TimepickerComponent.prototype.size;
    /** @type {?} */
    TimepickerComponent.prototype.shouldUseFallback;
    /** @type {?} */
    TimepickerComponent.prototype.minutes;
    /** @type {?} */
    TimepickerComponent.prototype.hours;
    /** @type {?} */
    TimepickerComponent.prototype.updateModel;
    /** @type {?} */
    TimepickerComponent.prototype.timeControl;
    /** @type {?} */
    TimepickerComponent.prototype.fallbackForm;
    /** @type {?} */
    TimepickerComponent.prototype.componentDestroyed$;
    /** @type {?} */
    TimepickerComponent.prototype.formBuilder;
    /** @type {?} */
    TimepickerComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFhLFdBQVcsRUFBRSxXQUFXLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQXNEbEUsNkJBQ1MsYUFDQTtRQURBLGdCQUFXLEdBQVgsV0FBVztRQUNYLGFBQVEsR0FBUixRQUFRO2dDQWpCa0IsSUFBSTtrQ0FDRixJQUFJO3dCQUNkLEtBQUs7b0JBQ1ksbUJBQW1CLENBQUMsSUFBSTtpQ0FFekMsS0FBSzt1QkFDTCxFQUFFO3FCQUNKLEVBQUU7MkJBR04sSUFBSSxXQUFXLEVBQUU7bUNBR1UsSUFBSSxPQUFPLEVBQVc7S0FLbEU7Ozs7SUFFRyxzQ0FBUTs7Ozs7UUFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJ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OztJQUd4Qix3Q0FBVTs7OztRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUMxQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQUM7Ozs7O0lBR0ksc0NBQVE7Ozs7UUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUMxQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQUM7OztnQkFuSUosU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw0dENBeUJWO29CQUNBLE1BQU0sRUFBRSxDQUFDLG1GQUFtRixDQUFDO29CQUM3RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUM7NEJBQ1gsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7OzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWCxDQUFDO2lCQUNGOzs7O2dCQTNDZ0MsV0FBVztnQkFEMkIsU0FBUzs7O21DQThDOUUsS0FBSztxQ0FDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OEJBakRQOztTQTZDYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFJlbmRlcmVyMiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvdGFrZVVudGlsJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gJ0BhY3BhYXMtdWkvanMtZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IFRpbWVwaWNrZXJJbnB1dFNpemUgfSBmcm9tICcuLi8uLi90eXBlcy90aW1lcGlja2VyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRpbWVwaWNrZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJhLWlucHV0XCIgW2NsYXNzXT1cIidhLWlucHV0LS0nICsgc2l6ZVwiIFtuZ0NsYXNzXT1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yIH1cIiAqbmdJZj1cIiFzaG91bGRVc2VGYWxsYmFja1wiPlxuICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIFtmb3JtQ29udHJvbF09XCJ0aW1lQ29udHJvbFwiPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJzaG91bGRVc2VGYWxsYmFja1wiIFtmb3JtR3JvdXBdPVwiZmFsbGJhY2tGb3JtXCI+XG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbY2xhc3NdPVwiJ2EtaW5wdXQtLScgKyBzaXplXCIgW25nQ2xhc3NdPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYS1pbnB1dF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3Vyc1wiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJudWxsXCI+e3sgaG91cnNQbGFjZWhvbGRlciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91cnNcIiBbdmFsdWVdPVwiaG91clwiPnt7IGhvdXIgfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJhLWlucHV0IGhhcy1pY29uLXJpZ2h0XCIgW2NsYXNzXT1cIidhLWlucHV0LS0nICsgc2l6ZVwiIFtuZ0NsYXNzXT1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yIH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImEtaW5wdXRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwibWludXRlc1wiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJudWxsXCI+e3sgbWludXRlc1BsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIG1pbnV0ZXNcIiBbdmFsdWVdPVwibWludXRlXCI+e3sgbWludXRlIH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0IC5hLWlucHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0OjpiZWZvcmV7ei1pbmRleDoxMH1gXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaW1lcGlja2VyQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1mb3J3YXJkLXJlZlxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdEBJbnB1dCgpIHB1YmxpYyBob3Vyc1BsYWNlaG9sZGVyID0gJ0hIJztcblx0QElucHV0KCkgcHVibGljIG1pbnV0ZXNQbGFjZWhvbGRlciA9ICdNTSc7XG5cdEBJbnB1dCgpIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogVGltZXBpY2tlcklucHV0U2l6ZSA9IFRpbWVwaWNrZXJJbnB1dFNpemUuQXV0bztcblxuXHRwdWJsaWMgc2hvdWxkVXNlRmFsbGJhY2sgPSBmYWxzZTtcblx0cHVibGljIG1pbnV0ZXM6IHN0cmluZ1tdID0gW107XG5cdHB1YmxpYyBob3Vyczogc3RyaW5nW10gPSBbXTtcblx0cHVibGljIHVwZGF0ZU1vZGVsOiAodmFsdWU6IHN0cmluZykgPT4gYW55O1xuXG5cdHB1YmxpYyB0aW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXHRwdWJsaWMgZmFsbGJhY2tGb3JtOiBGb3JtR3JvdXA7XG5cblx0cHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcblx0KSB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNob3VsZFVzZUZhbGxiYWNrID0gdGhpcy5zdXBwb3J0c05hdGl2ZVRpbWVwaWNrZXIoKTtcblx0XHR0aGlzLm1pbnV0ZXMgPSB0aGlzLmdldE1pbnV0ZXMoKTtcblx0XHR0aGlzLmhvdXJzID0gdGhpcy5nZXRIb3VycygpO1xuXG5cdFx0dGhpcy5mYWxsYmFja0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdGhvdXJzOiBudWxsLFxuXHRcdFx0bWludXRlczogbnVsbCxcblx0XHR9KTtcblxuXHRcdHRoaXMuZmFsbGJhY2tGb3JtLnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtRGF0YSkgPT4ge1xuXHRcdFx0XHRpZiAoZm9ybURhdGEuaG91cnMgJiYgZm9ybURhdGEubWludXRlcykge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlTW9kZWwoYCR7Zm9ybURhdGEuaG91cnN9OiR7Zm9ybURhdGEubWludXRlc31gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZU1vZGVsKCcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnRpbWVDb250cm9sLnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpXG5cdFx0XHQuc3Vic2NyaWJlKCh0aW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlTW9kZWwodGltZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCh0cnVlKTtcblx0XHR0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnRpbWVDb250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGNvbnN0IHNwbGl0dGVkID0gdmFsdWUuc3BsaXQoJzonKTtcblx0XHRcdHRoaXMuZmFsbGJhY2tGb3JtLmdldCgnaG91cnMnKS5zZXRWYWx1ZShzcGxpdHRlZFswXSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZ2V0KCdtaW51dGVzJykuc2V0VmFsdWUoc3BsaXR0ZWRbMV0sIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZSk6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBvbkNoYW5nZTtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpOiB2b2lkIHt9XG5cblx0cHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnRpbWVDb250cm9sLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5mYWxsYmFja0Zvcm0uZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudGltZUNvbnRyb2wuZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHRcdHRoaXMuZmFsbGJhY2tGb3JtLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdXBwb3J0c05hdGl2ZVRpbWVwaWNrZXIoKTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbGVtZW50LnR5cGUgPSAndGltZSc7XG5cblx0XHRyZXR1cm4gZWxlbWVudC50eXBlID09PSAndGV4dCc7XG5cdH1cblxuXHRwcml2YXRlIGdldE1pbnV0ZXMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBBcnJheSg2MCkuZmlsbCgnJykubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBEYXRlSGVscGVyLmFkZExlYWRpbmdaZXJvKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0SG91cnMoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBBcnJheSgyNCkuZmlsbCgnJykubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBEYXRlSGVscGVyLmFkZExlYWRpbmdaZXJvKGluZGV4KTtcblx0XHR9KTtcblx0fVxufVxuIl19