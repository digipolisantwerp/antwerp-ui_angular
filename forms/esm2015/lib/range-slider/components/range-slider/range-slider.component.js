/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class RangeSliderComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.core_branding = true;
        this.min = 0;
        this.max = 100;
        this.minimalDistance = 1;
        this.step = 0;
        this.labelBefore = '';
        this.labelAfter = '';
        this.start = 0;
        this.end = false;
        this.steps = [];
        this.active = null;
        this.propagateChange = (value) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.step > 0) {
            for (let /** @type {?} */ i = 0; i <= this.max; i += Number(this.step)) {
                this.steps.push(i);
            }
        }
        this.startPercentage = this.startToPercentage();
        if (this.end) {
            this.endPercentage = this.endToPercentage();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && value.start) {
            this.start = value.start;
        }
        else if (!isNaN(value) && value !== '') {
            this.start = Number(value);
        }
        else {
            this.setStart(Number(this.min));
        }
        this.startPercentage = this.startToPercentage();
        if (value && value.end) {
            this.end = value.end;
            this.endPercentage = this.endToPercentage();
        }
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} handle
     * @return {?}
     */
    onMouseDown(handle) {
        this.active = handle;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (this.active === 'start') {
            this.setStart(this.round(this.start, this.step, 0));
            this.startPercentage = this.startToPercentage();
        }
        if (this.active === 'end') {
            this.setEnd(this.round(this.end, this.step, 0));
            this.endPercentage = this.endToPercentage();
        }
        this.active = null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (!this.active) {
            return;
        }
        event.preventDefault(); // Do not select text while sliding
        const /** @type {?} */ x = (/** @type {?} */ (event)).x !== undefined ? (/** @type {?} */ (event)).x : (/** @type {?} */ (event)).targetTouches[0].pageX;
        const /** @type {?} */ rect = this.elRef.nativeElement.getBoundingClientRect();
        const /** @type {?} */ newPercentage = this.calcPercentage(x, rect.width, rect.left);
        this.updateHandle(newPercentage);
    }
    /**
     * @param {?} newPercentage
     * @return {?}
     */
    updateHandle(newPercentage) {
        if (this.active === 'start') {
            this.startPercentage = newPercentage;
            this.setStart(this.percentageToStart());
            if (this.minimalDistanceNotRespected()) {
                this.setStart(Number(this.end) - Number(this.minimalDistance));
                this.startPercentage = this.startToPercentage();
            }
        }
        if (this.active === 'end' && this.endPercentage) {
            this.endPercentage = newPercentage;
            this.setEnd(this.percentageToEnd());
            if (this.minimalDistanceNotRespected()) {
                this.setEnd(Number(this.start) + Number(this.minimalDistance));
                this.endPercentage = this.endToPercentage();
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setStart(value) {
        this.start = value;
        if (this.end) {
            this.propagateChange(/** @type {?} */ ({
                start: this.start,
                end: this.end,
            }));
        }
        else {
            this.propagateChange(this.start);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        this.end = value;
        this.propagateChange(/** @type {?} */ ({
            start: this.start,
            end: this.end,
        }));
    }
    /**
     * @param {?} number
     * @param {?} increment
     * @param {?} offset
     * @return {?}
     */
    round(number, increment, offset) {
        if (increment > 0) {
            return Math.round((number - offset) / increment) * increment + offset;
        }
        return number;
    }
    /**
     * @return {?}
     */
    startToPercentage() {
        return Math.round((this.start - this.min) / (this.max - this.min) * 100);
    }
    /**
     * @return {?}
     */
    percentageToStart() {
        return Math.round((this.startPercentage / 100) * (this.max - this.min) + Number(this.min));
    }
    /**
     * @return {?}
     */
    endToPercentage() {
        return Math.round((Number(this.end) - this.min) / (this.max - this.min) * 100);
    }
    /**
     * @return {?}
     */
    percentageToEnd() {
        return Math.round((this.endPercentage / 100) * (this.max - this.min) + Number(this.min));
    }
    /**
     * @return {?}
     */
    minimalDistanceNotRespected() {
        return this.minimalDistance >= 0 && this.end && this.start > Number(this.end) - this.minimalDistance;
    }
    /**
     * @param {?} mouseX
     * @param {?} width
     * @param {?} offsetLeft
     * @return {?}
     */
    calcPercentage(mouseX, width, offsetLeft) {
        const /** @type {?} */ mousePos = mouseX - offsetLeft;
        let /** @type {?} */ newPercentage = Math.round((mousePos / width) * 100);
        if (newPercentage > 100) {
            newPercentage = 100;
        }
        if (newPercentage < 0) {
            newPercentage = 0;
        }
        return newPercentage;
    }
}
RangeSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-range-slider',
                template: `<div class="m-range-slider__inner">
    <div class="m-range-slider__bar" [style.left]="(endPercentage ? startPercentage + '%' : false)" [style.width]="(endPercentage ? endPercentage - startPercentage +'%' : startPercentage +'%')"></div>
    <span (touchstart)="onMouseDown('start')" (mousedown)="onMouseDown('start')" class="m-range-slider__handle" [style.left]="startPercentage + '%'">
        <div class="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
            <p>{{ labelBefore }}{{ start }}{{ labelAfter }}</p>
        </div>
    </span>

    <span *ngIf="end" (touchstart)="onMouseDown('end')" (mousedown)="onMouseDown('end')" class="m-range-slider__handle" [style.left]="endPercentage + '%'">
        <div class="m-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top">
            <p>{{ labelBefore }}{{ end }}{{ labelAfter }}</p>
        </div>
    </span>
</div>

<div class="m-range-slider__steps">
    <div class="m-range-slider__step" *ngFor="let step of steps; let i = index"></div>
</div>

<div class="m-range-slider__step-labels">
    <div class="m-range-slider__step" *ngFor="let step of steps; let i = index">{{ step }}</div>
</div>
`,
                styles: [`:host{display:block;position:relative}.m-range-slider__handle{z-index:10}.m-range-slider__tooltip{white-space:nowrap}.m-range-slider__steps{display:flex;justify-content:space-between;width:100%;position:absolute;top:0;left:0;right:0;padding:.25rem;z-index:8}.m-range-slider__steps .m-range-slider__step{width:16px;height:16px;background-color:#b0b0b0;text-align:center;border-radius:50%;margin:2px}.m-range-slider__step-labels{display:flex;justify-content:space-between;margin-top:1rem;color:#444;font-size:14px}.m-range-slider__step-labels .m-range-slider__step{width:25px}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RangeSliderComponent),
                        // tslint:disable-line
                        multi: true,
                    },
                ],
            },] },
];
/** @nocollapse */
RangeSliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
RangeSliderComponent.propDecorators = {
    core_branding: [{ type: HostBinding, args: ['class.m-range-slider',] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    minimalDistance: [{ type: Input }],
    step: [{ type: Input }],
    labelBefore: [{ type: Input }],
    labelAfter: [{ type: Input }],
    onMouseUp: [{ type: HostListener, args: ['touchend', ['$event'],] }, { type: HostListener, args: ['mouseup', ['$event'],] }],
    onMouseMove: [{ type: HostListener, args: ['touchmove', ['$event'],] }, { type: HostListener, args: ['mousemove', ['$event'],] }]
};
function RangeSliderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    RangeSliderComponent.prototype.core_branding;
    /** @type {?} */
    RangeSliderComponent.prototype.min;
    /** @type {?} */
    RangeSliderComponent.prototype.max;
    /** @type {?} */
    RangeSliderComponent.prototype.minimalDistance;
    /** @type {?} */
    RangeSliderComponent.prototype.step;
    /** @type {?} */
    RangeSliderComponent.prototype.labelBefore;
    /** @type {?} */
    RangeSliderComponent.prototype.labelAfter;
    /** @type {?} */
    RangeSliderComponent.prototype.start;
    /** @type {?} */
    RangeSliderComponent.prototype.end;
    /** @type {?} */
    RangeSliderComponent.prototype.steps;
    /** @type {?} */
    RangeSliderComponent.prototype.startPercentage;
    /** @type {?} */
    RangeSliderComponent.prototype.endPercentage;
    /** @type {?} */
    RangeSliderComponent.prototype.active;
    /** @type {?} */
    RangeSliderComponent.prototype.propagateChange;
    /** @type {?} */
    RangeSliderComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3JhbmdlLXNsaWRlci9jb21wb25lbnRzL3JhbmdlLXNsaWRlci9yYW5nZS1zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBcUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBeUIsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXNDMUUsTUFBTTs7OztJQWlCTCxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZOzZCQWhCZ0IsSUFBSTttQkFFbkMsQ0FBQzttQkFDRCxHQUFHOytCQUNTLENBQUM7b0JBQ1osQ0FBQzsyQkFDTSxFQUFFOzBCQUNILEVBQUU7cUJBRWhCLENBQUM7bUJBQ2lCLEtBQUs7cUJBQ3ZCLEVBQUU7c0JBR0QsSUFBSTsrQkFJSyxDQUFDLEtBQThCLEVBQUUsRUFBRSxJQUFHO0tBRnRCOzs7O0lBSWxDLFFBQVE7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtTQUNEO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFD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QyxDQUFDO1lBQ3ZCLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDOzs7O1lBck50QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0JWO2dCQUNBLE1BQU0sRUFBRSxDQUFDLGdrQkFBZ2tCLENBQUM7Z0JBQzFrQixTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzs7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7WUF0Q3FELFVBQVU7Ozs0QkF3QzlELFdBQVcsU0FBQyxzQkFBc0I7a0JBRWxDLEtBQUs7a0JBQ0wsS0FBSzs4QkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQXNETCxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ25DLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBZWxDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDcEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSYW5nZVNsaWRlclJhbmdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcmFuZ2Utc2xpZGVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXJhbmdlLXNsaWRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19pbm5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fYmFyXCIgW3N0eWxlLmxlZnRdPVwiKGVuZFBlcmNlbnRhZ2UgPyBzdGFydFBlcmNlbnRhZ2UgKyAnJScgOiBmYWxzZSlcIiBbc3R5bGUud2lkdGhdPVwiKGVuZFBlcmNlbnRhZ2UgPyBlbmRQZXJjZW50YWdlIC0gc3RhcnRQZXJjZW50YWdlICsnJScgOiBzdGFydFBlcmNlbnRhZ2UgKyclJylcIj48L2Rpdj5cbiAgICA8c3BhbiAodG91Y2hzdGFydCk9XCJvbk1vdXNlRG93bignc3RhcnQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ3N0YXJ0JylcIiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19oYW5kbGVcIiBbc3R5bGUubGVmdF09XCJzdGFydFBlcmNlbnRhZ2UgKyAnJSdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX190b29sdGlwIGEtdG9vbHRpcCBhLXRvb2x0aXAtLXByaW1hcnkgYS10b29sdGlwLS10b3BcIj5cbiAgICAgICAgICAgIDxwPnt7IGxhYmVsQmVmb3JlIH19e3sgc3RhcnQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cImVuZFwiICh0b3VjaHN0YXJ0KT1cIm9uTW91c2VEb3duKCdlbmQnKVwiIChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJ2VuZCcpXCIgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9faGFuZGxlXCIgW3N0eWxlLmxlZnRdPVwiZW5kUGVyY2VudGFnZSArICclJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibS1yYW5nZS1zbGlkZXJfX3Rvb2x0aXAgYS10b29sdGlwIGEtdG9vbHRpcC0tcHJpbWFyeSBhLXRvb2x0aXAtLXRvcFwiPlxuICAgICAgICAgICAgPHA+e3sgbGFiZWxCZWZvcmUgfX17eyBlbmQgfX17eyBsYWJlbEFmdGVyIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tcmFuZ2Utc2xpZGVyX19zdGVwLWxhYmVsc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtLXJhbmdlLXNsaWRlcl9fc3RlcFwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCI+e3sgc3RlcCB9fTwvZGl2PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0ubS1yYW5nZS1zbGlkZXJfX2hhbmRsZXt6LWluZGV4OjEwfS5tLXJhbmdlLXNsaWRlcl9fdG9vbHRpcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOi4yNXJlbTt6LWluZGV4Ojh9Lm0tcmFuZ2Utc2xpZGVyX19zdGVwcyAubS1yYW5nZS1zbGlkZXJfX3N0ZXB7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjA7dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjJweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tdG9wOjFyZW07Y29sb3I6IzQ0NDtmb250LXNpemU6MTRweH0ubS1yYW5nZS1zbGlkZXJfX3N0ZXAtbGFiZWxzIC5tLXJhbmdlLXNsaWRlcl9fc3RlcHt3aWR0aDoyNXB4fWBdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlU2xpZGVyQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5tLXJhbmdlLXNsaWRlcicpIGNvcmVfYnJhbmRpbmcgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtaW4gPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4ID0gMTAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWluaW1hbERpc3RhbmNlID0gMTtcblx0QElucHV0KCkgcHVibGljIHN0ZXAgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxCZWZvcmUgPSAnJztcblx0QElucHV0KCkgcHVibGljIGxhYmVsQWZ0ZXIgPSAnJztcblxuXHRwdWJsaWMgc3RhcnQgPSAwO1xuXHRwdWJsaWMgZW5kOiAobnVtYmVyIHwgYm9vbGVhbikgPSBmYWxzZTtcblx0cHVibGljIHN0ZXBzID0gW107XG5cdHB1YmxpYyBzdGFydFBlcmNlbnRhZ2U7XG5cdHB1YmxpYyBlbmRQZXJjZW50YWdlO1xuXHRwdWJsaWMgYWN0aXZlID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdHB1YmxpYyBwcm9wYWdhdGVDaGFuZ2UgPSAodmFsdWU6IG51bWJlcnxSYW5nZVNsaWRlclJhbmdlKSA9PiB7fTtcblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMuc3RlcCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMubWF4OyBpICs9IE51bWJlcih0aGlzLnN0ZXApKSB7XG5cdFx0XHRcdHRoaXMuc3RlcHMucHVzaChpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblxuXHRcdGlmICh0aGlzLmVuZCkge1xuXHRcdFx0dGhpcy5lbmRQZXJjZW50YWdlID0gdGhpcy5lbmRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnN0YXJ0KSB7XG5cdFx0XHR0aGlzLnN0YXJ0ID0gdmFsdWUuc3RhcnQ7XG5cdFx0fSBlbHNlIGlmICghaXNOYU4odmFsdWUpICYmIHZhbHVlICE9PSAnJykge1xuXHRcdFx0dGhpcy5zdGFydCA9IE51bWJlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhcnQoTnVtYmVyKHRoaXMubWluKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cblx0XHRpZiAodmFsdWUgJiYgdmFsdWUuZW5kKSB7XG5cdFx0XHR0aGlzLmVuZCA9IHZhbHVlLmVuZDtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRwdWJsaWMgb25Nb3VzZURvd24oaGFuZGxlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBoYW5kbGU7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFsnJGV2ZW50J10pXG5cdEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25Nb3VzZVVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnc3RhcnQnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXJ0KHRoaXMucm91bmQodGhpcy5zdGFydCwgdGhpcy5zdGVwLCAwKSk7XG5cdFx0XHR0aGlzLnN0YXJ0UGVyY2VudGFnZSA9IHRoaXMuc3RhcnRUb1BlcmNlbnRhZ2UoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5hY3RpdmUgPT09ICdlbmQnKSB7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnJvdW5kKHRoaXMuZW5kLCB0aGlzLnN0ZXAsIDApKTtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmUgPSBudWxsO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcblx0QEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuXHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3Qgc2VsZWN0IHRleHQgd2hpbGUgc2xpZGluZ1xuXG5cdFx0Y29uc3QgeCA9IChldmVudCBhcyBNb3VzZUV2ZW50KS54ICE9PSB1bmRlZmluZWQgPyAoZXZlbnQgYXMgTW91c2VFdmVudCkueCA6IChldmVudCBhcyBUb3VjaEV2ZW50KS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgbmV3UGVyY2VudGFnZSA9IHRoaXMuY2FsY1BlcmNlbnRhZ2UoeCwgcmVjdC53aWR0aCwgcmVjdC5sZWZ0KTtcblx0XHR0aGlzLnVwZGF0ZUhhbmRsZShuZXdQZXJjZW50YWdlKTtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVIYW5kbGUobmV3UGVyY2VudGFnZSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSBuZXdQZXJjZW50YWdlO1xuXHRcdFx0dGhpcy5zZXRTdGFydCh0aGlzLnBlcmNlbnRhZ2VUb1N0YXJ0KCkpO1xuXG5cdFx0XHRpZiAodGhpcy5taW5pbWFsRGlzdGFuY2VOb3RSZXNwZWN0ZWQoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXJ0KE51bWJlcih0aGlzLmVuZCkgLSBOdW1iZXIodGhpcy5taW5pbWFsRGlzdGFuY2UpKTtcblx0XHRcdFx0dGhpcy5zdGFydFBlcmNlbnRhZ2UgPSB0aGlzLnN0YXJ0VG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYWN0aXZlID09PSAnZW5kJyAmJiB0aGlzLmVuZFBlcmNlbnRhZ2UpIHtcblx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IG5ld1BlcmNlbnRhZ2U7XG5cdFx0XHR0aGlzLnNldEVuZCh0aGlzLnBlcmNlbnRhZ2VUb0VuZCgpKTtcblxuXHRcdFx0aWYgKHRoaXMubWluaW1hbERpc3RhbmNlTm90UmVzcGVjdGVkKCkpIHtcblx0XHRcdFx0dGhpcy5zZXRFbmQoTnVtYmVyKHRoaXMuc3RhcnQpICsgTnVtYmVyKHRoaXMubWluaW1hbERpc3RhbmNlKSk7XG5cdFx0XHRcdHRoaXMuZW5kUGVyY2VudGFnZSA9IHRoaXMuZW5kVG9QZXJjZW50YWdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLSBIRUxQRVJTIC0tLS0tLS0tLS0gLy9cblx0cHVibGljIHNldFN0YXJ0KHZhbHVlKSB7XG5cdFx0dGhpcy5zdGFydCA9IHZhbHVlO1xuXG5cdFx0aWYgKHRoaXMuZW5kKSB7XG5cdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLnN0YXJ0LFxuXHRcdFx0XHRlbmQ6IHRoaXMuZW5kLFxuXHRcdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdGFydCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNldEVuZCh2YWx1ZSkge1xuXHRcdHRoaXMuZW5kID0gdmFsdWU7XG5cblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSh7XG5cdFx0XHRzdGFydDogdGhpcy5zdGFydCxcblx0XHRcdGVuZDogdGhpcy5lbmQsXG5cdFx0fSBhcyBSYW5nZVNsaWRlclJhbmdlKTtcblx0fVxuXG5cdHB1YmxpYyByb3VuZChudW1iZXIsIGluY3JlbWVudCwgb2Zmc2V0KSB7XG5cdFx0aWYgKGluY3JlbWVudCA+IDApIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKChudW1iZXIgLSBvZmZzZXQpIC8gaW5jcmVtZW50ICkgKiBpbmNyZW1lbnQgKyBvZmZzZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdHB1YmxpYyBzdGFydFRvUGVyY2VudGFnZSgpIHtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLnN0YXJ0IC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pICogMTAwKTtcblx0fVxuXG5cdHB1YmxpYyBwZXJjZW50YWdlVG9TdGFydCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5zdGFydFBlcmNlbnRhZ2UgLyAxMDApICogKHRoaXMubWF4IC0gdGhpcy5taW4pICsgTnVtYmVyKHRoaXMubWluKSk7XG5cdH1cblxuXHRwdWJsaWMgZW5kVG9QZXJjZW50YWdlKCkge1xuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQoKE51bWJlcih0aGlzLmVuZCkgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDApO1xuXHR9XG5cblx0cHVibGljIHBlcmNlbnRhZ2VUb0VuZCgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5lbmRQZXJjZW50YWdlIC8gMTAwKSAqICh0aGlzLm1heCAtIHRoaXMubWluKSArIE51bWJlcih0aGlzLm1pbikpO1xuXHR9XG5cblx0cHVibGljIG1pbmltYWxEaXN0YW5jZU5vdFJlc3BlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5taW5pbWFsRGlzdGFuY2UgPj0gMCAmJiB0aGlzLmVuZCAmJiB0aGlzLnN0YXJ0ID4gTnVtYmVyKHRoaXMuZW5kKSAtIHRoaXMubWluaW1hbERpc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIGNhbGNQZXJjZW50YWdlKG1vdXNlWCwgd2lkdGgsIG9mZnNldExlZnQpIHtcblx0XHRjb25zdCBtb3VzZVBvcyA9IG1vdXNlWCAtIG9mZnNldExlZnQ7XG5cblx0XHRsZXQgbmV3UGVyY2VudGFnZSA9IE1hdGgucm91bmQoKG1vdXNlUG9zIC8gd2lkdGgpICogMTAwKTtcblxuXHRcdGlmIChuZXdQZXJjZW50YWdlID4gMTAwKSB7XG5cdFx0XHRuZXdQZXJjZW50YWdlID0gMTAwO1xuXHRcdH1cblxuXHRcdGlmIChuZXdQZXJjZW50YWdlIDwgMCkge1xuXHRcdFx0bmV3UGVyY2VudGFnZSA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld1BlcmNlbnRhZ2U7XG5cdH1cbn1cbiJdfQ==